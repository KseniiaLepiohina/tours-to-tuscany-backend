import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import * as bcrypt from 'bcrypt';
import { User } from './entities/user.entity';
import { DataSource, Repository } from 'typeorm';
import { Jwt } from 'jsonwebtoken';
import { MailerService } from '@nestjs-modules/mailer';
import { JwtService } from '@nestjs/jwt';
import { google } from 'googleapis';
import { ConfigService } from '@nestjs/config';
import { OAuth2Client } from 'google-auth-library';

@Injectable()
export class UsersService {
  googleAuth(): { url: string; } | PromiseLike<{ url: string; }> {
    throw new Error('Method not implemented.');
  }
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
    private readonly dataSource: DataSource,
    private readonly mailerService: MailerService,
    private readonly jwtService: JwtService,
    private readonly configService: ConfigService,
  ) { }
  async createFromForm(fullName: string, email: string, password: string) {
    try {
      const saltRounds = 10;
      const hashedPassword = await bcrypt.hash(password, saltRounds)
      const newUser = await this.dataSource
        .createQueryBuilder()
        .insert()
        .into(User)
        .values({ fullName, email, password: hashedPassword })
        .execute();
      return newUser;

    } catch (error) {
      console.log(error);
      throw new HttpException('Failed with creating new user', HttpStatus.BAD_REQUEST);
    }
  }

  async updatePassword(id: number, password: string) {
    try {
      const hashedPassword = await bcrypt.hash(password, 10);

      const result = await this.dataSource
        .createQueryBuilder()
        .update(User)
        .set({ password: hashedPassword })
        .where('id = :id', { id })
        .execute();

      if (result.affected === 0) {
        throw new HttpException('User not found', HttpStatus.NOT_FOUND);
      }

      return result && { message: 'Password successfully updated' };
    } catch (error) {
      throw new HttpException('Failed to update password', HttpStatus.BAD_REQUEST);
    }
  }


  async login(email: string, password: string) {
    try {
      const user = await this.dataSource
        .getRepository(User)
        .createQueryBuilder('user')
        .where('user.email = :email', { email })
        .getOne();

      if (!user) {
        throw new HttpException('User not found', HttpStatus.NOT_FOUND);
      }

      const isPasswordValid = await bcrypt.compare(password, user.password);
      if (!isPasswordValid) {
        throw new HttpException('Invalid credentials', HttpStatus.UNAUTHORIZED);
      }

      // Return user info without password, or a JWT token
      const { password: _, ...result } = user;
      return result;
    } catch (error) {
      throw error;
    }
  }
  async forgotPassword(email: string) {
    try {
      const user = await this.dataSource
        .getRepository(User)
        .createQueryBuilder('user')
        .where('user.email = :email', { email })
        .getOne();

      if (!user) {
        throw new HttpException('User with this email does not exist', HttpStatus.NOT_FOUND);
      }

      const token = this.jwtService.sign({ email: user.email }, { expiresIn: '24h' });

      const resetLink = `https://tourstotuscany-frontend.vercel.app/reset-password?token=${token}`;


      await this.mailerService.sendMail({
        to: email,
        subject: 'Forgot Password | TechMailer',
        template: './templates/forgot-password',
        context: {
          resetLink,
          email,
        },
      });

      return { message: 'Reset link sent to your email' };

    } catch (error) {
      if (error instanceof HttpException) throw error;
      throw new HttpException('Something went wrong', HttpStatus.BAD_REQUEST);
    }
  }

}
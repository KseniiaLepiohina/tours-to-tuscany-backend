import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import * as bcrypt from 'bcrypt';
import { User } from './entities/user.entity';
import { DataSource, Repository } from 'typeorm';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
    private readonly dataSource: DataSource,
  ) {}
 async createFromForm(fullName: string, email: string, password: string) {
    try{
      const saltRounds = 10;
      const hashedPassword = await bcrypt.hash(password,saltRounds)
      const newUser = await this.dataSource
      .createQueryBuilder()
      .insert()
      .into(User)
      .values({ fullName, email, password: hashedPassword })
      .execute();
    return newUser;

    }catch(error) {
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


}
 // try {
  //   const user = await this.userRepository.findOne({ where: { email } });
  //   if (!user) {
  //     throw new HttpException('User not found', HttpStatus.NOT_FOUND);
  //   }

  //   const isPasswordValid = await bcrypt.compare(password, user.password);
  //   if (!isPasswordValid) {
  //     throw new HttpException('Invalid credentials', HttpStatus.UNAUTHORIZED);
  //   }

  //   return  { message: 'Login successful', user };
  // } catch (error) {
  //   throw new HttpException('Failed to login', HttpStatus.BAD_REQUEST);
  // }
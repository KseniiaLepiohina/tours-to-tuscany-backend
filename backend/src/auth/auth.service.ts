import {
  BadRequestException,
  Injectable,
  InternalServerErrorException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { CreateAuthDto, LoginAuthDto } from './dto/create-auth.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import * as bcrypt from 'bcrypt';
import { ConfigService } from '@nestjs/config';

import { Auth, AuthDocument } from './shema/auth.shema';
import sendEmail from './nodeMailer';


@Injectable()
export class AuthService {
  constructor(
    private jwtService: JwtService,
    configService: ConfigService,
    @InjectModel(Auth.name) private authModel: Model<AuthDocument>,
  ) {}

  // ✅ Генерація JWT токену
  generateJwt(payload: { id: string; email: string }): string {
    return this.jwtService.sign(payload, {
      secret: process.env.JWT_SECRET,
      expiresIn: '1h',
    });
  }
  validateToken(token: string) {
    try {
      return this.jwtService.verify(token, {
        secret: process.env.JWT_SECRET,
      });
    } catch (error) {
      if (error instanceof Error) {
        console.error(error.message); // Handle the error message
      }
      throw new BadRequestException('Invalid token');
    }
  }

  // ✅ Реєстрація користувача
  async registerUser(userDto: CreateAuthDto) {
    try {
      // Перевірка чи існує користувач з таким email
      const existing = await this.authModel.findOne({ email: userDto.email });
      if (existing) {
        throw new BadRequestException('Email вже використовується');
      }

      // Хешування пароля
      const hashedPassword = await bcrypt.hash(userDto.password, 10);

      // Створення нового користувача
      const newUser = new this.authModel({
        ...userDto,
        password: hashedPassword,
      });

      // Збереження нового користувача в базу даних
      await newUser.save();

      // Повернення нового користувача (можна додати дані без пароля)
      return {
        id: newUser._id,
        fullName: newUser.fullName,
        email: newUser.email,
      };
    } catch (error) {
      console.error('Error details:', error.message);
      throw new InternalServerErrorException(
        'Помилка при створенні користувача',
      );
    }
  }

  // Логіка для входу користувача
  async signIn(authDto: LoginAuthDto) {
    const user = await this.authModel.findOne({ email: authDto.email });
    if (!user || !user.password) {
      throw new BadRequestException('Invalid credentials');
    }

    const isMatch = await bcrypt.compare(authDto.password, user.password);

    if (!isMatch) {
      throw new BadRequestException('Невірні дані');
    }

    const token = this.generateJwt({
      id: user._id.toString(),
      email: user.email,
    });

    return {
      token,
      user: {  email: user.email,password:user.password },
    };
  }

  // ✅ Знайти користувача за email (для скидання пароля)
  async forgotPassword(email: string) {
    const user = await this.authModel.findOne({ email });
    if (!user) {
      throw new BadRequestException('User not found');
    }
    return user;
  }


  
  async resetPassByEmail (email:string,token:string) {
    const payload = this.jwtService.verify(token);
const user = await this.forgotPassword(email);
const resetToken = this.generateJwt({
  id:user._id.toString(),
  email:user.email
  });
const resetLink = `http://localhost:3000/reset-password?token=${resetToken}`;
await sendEmail(user.email,resetLink);
return {message:'Reset link sent to email'};
}
}




// ✅ Оновити пароль по ID
// async updatePassword(password: string, token: string) {
//     try {
//       // Verifying token before processing password update
//       const decoded = this.jwtService.verify(token, {
//         secret: process.env.JWT_SECRET,
//       });

//       const userId = decoded.id;

//       const hashedPassword = await bcrypt.hash(password, 10);

//       // Update the password in the database
//       await this.authModel.findByIdAndUpdate(userId, {
//         password: hashedPassword,
//       });

//       return { message: 'Password updated successfully' };
//     } catch (error) {
//       throw new InternalServerErrorException('Error updating password');
//     }

// async connectToGoogle() {
  
// }
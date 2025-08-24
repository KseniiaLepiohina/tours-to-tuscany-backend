import { IsString, IsEmail, MinLength, MaxLength, IsPhoneNumber, IsNotEmpty } from 'class-validator';

export class CreateAuthDto {
  @IsString()
  fullName: string;
  @IsEmail()
  email: string;
  @IsString()
  password: string;
}

export class LoginAuthDto {
  @IsEmail()
  email:string;
  
  @IsNotEmpty()
  password:string;
}

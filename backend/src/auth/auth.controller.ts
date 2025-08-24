import {
  Controller,
  Post,
  Body,
  UsePipes,
  ValidationPipe,
  UseGuards,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateAuthDto, LoginAuthDto } from './dto/create-auth.dto';
import { AuthGuard, JwtAuthGuard } from 'src/guards/jwt.payload';


@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  
  @Post('/createAccount')
  @UsePipes(ValidationPipe)
  async createAccount(@Body() createAuthDto: CreateAuthDto) {
    return await this.authService.registerUser(createAuthDto);
  }

  @Post('login')
  @UseGuards(JwtAuthGuard)
  @UsePipes(ValidationPipe)
  async login(@Body() user: LoginAuthDto) {
    
    return await this.authService.signIn(user);
  }


  @Post('forgotPassword')
  async forgotPassword(@Body() email:string) {
    return await this.authService.forgotPassword(email)
  }
  
  @Post('resetpassword')
  async resetPassword(@Body() email:string,token:string) {
    return await this.authService.resetPassByEmail(email,token);
  }
  

  // @Post('/newPassword')
  // async updatePassword(
  //   @Body('newPassword') newPassword: string,
  //   @Body('token') token: string,
  // ) {
  //   return await this.authService.updatePassword(newPassword, token);
  // }
}

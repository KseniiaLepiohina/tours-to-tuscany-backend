import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Controller('users')
export class UsersController {
  constructor(
    private readonly usersService: UsersService,
    
  
  ) {}

  @Post('newUser/:fullName/:email/:password')
  create(
    @Param('fullName')fullName:string,
    @Param('email')email:string,
    @Param('password')password:string
  ) {
    return this.usersService.createFromForm(fullName,email,password);
  }

@Post('login')
login(
  @Param('email') email:string,
  @Param('password') password:string
) {
  return this.usersService.login(email,password)
}

  @Patch('updatePassword')
  update(
  @Param('id') id: number,
  @Param('password')password:string
  ) {return this.usersService.updatePassword(id,password);}
  

}

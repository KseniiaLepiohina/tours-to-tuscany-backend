import { Module } from '@nestjs/common';
import { GoogleService } from './google.service';
import { GoogleController } from './google.controller';
import { AppService } from 'src/app.service';
import { JwtService } from '@nestjs/jwt';

@Module({
  providers: [GoogleService,AppService,JwtService],
  controllers: [GoogleController],
  exports:[GoogleService]
})
export class GoogleModule {}

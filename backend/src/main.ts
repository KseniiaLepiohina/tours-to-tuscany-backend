
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
// import { AuthGuard } from './guards/jwt.payload';
import { JwtService } from '@nestjs/jwt';
import { createTestAccount } from 'nodemailer';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  app.useGlobalPipes(new ValidationPipe({ whitelist: true }));

  const jwtService = app.get(JwtService);
  // app.useGlobalGuards(new AuthGuard(jwtService));

  await app.listen(5000);
createTestAccount();
}
bootstrap();

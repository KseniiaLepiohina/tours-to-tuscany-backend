
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
// import { AuthGuard } from './guards/jwt.payload';
// import { JwtService } from '@nestjs/jwt';
// import { createTestAccount } from 'nodemailer';
// import * as serviceAccount from '../src/firebase-adminsdk.json'

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({
    origin:'tourstotuscany-frontend.vercel.app',
    methods:'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials:true,
  });
  app.useGlobalPipes(new ValidationPipe({ whitelist: true }));

  // const jwtService = app.get(JwtService);
  // app.useGlobalGuards(new AuthGuard(jwtService));
// admin.initializeApp({
//   credential: admin.credential.cert(serviceAccount as admin.ServiceAccount),
// });
  await app.listen(5000);

}
bootstrap();

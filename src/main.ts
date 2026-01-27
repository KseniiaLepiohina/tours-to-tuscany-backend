
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const config = new DocumentBuilder()
    .setTitle('Tours to Tuscany')
    .setDescription('The Tours to Tuscany API description')
    .setVersion('1.0')
    .addTag('Tuscany')
    .build()
    const  documentFactory  = () => SwaggerModule.createDocument(app,config);
    SwaggerModule.setup('api', app, documentFactory);
  app.enableCors({
    origin:'tourstotuscany-frontend.vercel.app',
    methods:'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials:true,
  });
  app.useGlobalPipes(new ValidationPipe({ whitelist: true }));
  await app.listen(process.env.PORT || 3000);

}
bootstrap();


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
  origin: (origin, callback) => {
    const allowed = [
      'http://localhost:3000'
    ];
    if (!origin || allowed.includes(origin) || origin.endsWith('.vercel.app')) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
  credentials: true,
  allowedHeaders: 'Content-Type, Accept, Authorization',
});
  app.useGlobalPipes(new ValidationPipe({ whitelist: true }));
 const port = process.env.PORT || 5000;
  await app.listen(port, '0.0.0.0');

}
bootstrap();

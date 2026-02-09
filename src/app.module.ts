import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TourModule } from './tours/tour.module';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';

import { MainGalleryModule } from './main_gallery/main_gallery.module';
import { TestimonialsModule } from './testimonials/testimonials.module';
import { GalleryModule } from './gallery/gallery.module';
import { UsersModule } from './users/users.module';
import { MailModule } from './mailer/mail.module';
import { DatabaseModule } from './database/database.module';
import { GoogleModule } from './google/google.module';
import { ContactUsModule } from './contact-us/contact-us.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal:true,
      envFilePath:'.env',
    }),
    TypeOrmModule.forRootAsync({
      imports:[ConfigModule],
      inject:[ConfigService],
      useFactory: (configService: ConfigService) => ({
    type: 'postgres',
    url: configService.get('DATABASE_URL'), 
    entities: [__dirname + '/**/*.entity{.ts,.js}'],
    synchronize: true,
    ssl: true, 
  }),
    }),
    TourModule,
    MainGalleryModule,
    GalleryModule,
    TestimonialsModule,
    UsersModule,
    MailModule,
    DatabaseModule,
    GoogleModule,
    ContactUsModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

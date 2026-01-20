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

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal:true,
      envFilePath:'.env',
    }),
    TypeOrmModule.forRootAsync({
      imports:[ConfigModule],
      inject:[ConfigService],
      useFactory:(ConfigService:ConfigService) => ({
        type:'postgres',
        host:ConfigService.get<string>('DB_URI'),
<<<<<<< HEAD
       
=======
>>>>>>> main
        autoLoadEntities:true,
        synchronize:true,
      }),
    }),
    TourModule,
    MainGalleryModule,
    GalleryModule,
    TestimonialsModule,
    UsersModule,
    MailModule,
 
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

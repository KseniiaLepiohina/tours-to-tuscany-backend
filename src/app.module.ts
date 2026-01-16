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
        // port:ConfigService.get<number>('DB_PORT'),
        // username:ConfigService.get<string>('DB_USERNAME'),
        // password:ConfigService.get<string>('DB_PASSWORD'),
        // database:ConfigService.get<string>('DB_NAME'),
        autoLoadEntities:true,
        synchronize:true,
      }),
    }),
    TourModule,
    MainGalleryModule,
    GalleryModule,
    TestimonialsModule,
    UsersModule,
 
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

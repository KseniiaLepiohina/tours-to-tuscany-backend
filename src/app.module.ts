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
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal:true,
      envFilePath:'.env',
    }),
    JwtModule.register({
      secret:process.env.JWT_SECRET,
      signOptions:{expiresIn:'1d'}
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
    GoogleModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { MongooseModule } from '@nestjs/mongoose';
import { TourModule } from './tour/tour.module';
import { ConfigModule } from '@nestjs/config';
import { BookingModule } from './booking/booking.module';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://kseniyalepiohina:qlyi9AFF4N3tHSxX@tuscanycluster.ji1f6.mongodb.net/Tuscany',
    ),
    ConfigModule.forRoot({ 
      isGlobal: true, 
      envFilePath:'.env',
    }),
    AuthModule,
    TourModule,
    BookingModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

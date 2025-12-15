import { Module } from '@nestjs/common';
import { TourService } from './tour.service';
import { TourController } from './tour.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Tour } from './entity/tour.entity';
// import { Tour, TourSchema } from './shema/tour.shema';

@Module({
  imports: [
    TypeOrmModule.forFeature([Tour])
  ],
  controllers: [TourController],
  providers: [TourService],
})
export class TourModule {}

import { Module } from '@nestjs/common';
import { TourService } from './tour.service';
import { TourController } from './tour.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Tour, TourSchema } from './shema/tour.shema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Tour.name, schema: TourSchema,collection:'avaliabletours' }]),
  ],
  controllers: [TourController],
  providers: [TourService],
})
export class TourModule {}

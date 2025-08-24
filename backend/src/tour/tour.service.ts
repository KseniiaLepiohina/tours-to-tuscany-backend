import { Inject, Injectable,BadRequestException,NotFoundException,InternalServerErrorException} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { isValidObjectId } from 'mongoose';
import { Model } from 'mongoose';
import { Tour, TourDocument } from './shema/tour.shema';

@Injectable()
export class TourService {
  constructor(
    @InjectModel(Tour.name) private tourModel: Model<TourDocument>,
  ) {}

  async findAllTours() {
    return this.tourModel.find().exec()
  }

 async findById(id: string) {
  if (!isValidObjectId(id)) {
    throw new BadRequestException('Invalid ID format');
  }

  const tour = await this.tourModel.findById(id).exec();
  if (!tour) {
    throw new NotFoundException(`Tour with id "${id}" not found`);
  }

  return tour;
}

}


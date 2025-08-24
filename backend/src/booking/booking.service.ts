import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Booking } from './schema/booking.schema';
import { CreateBookingDto } from './dto/create-booking.dto';
import { CreateAuthDto } from 'src/auth/dto/create-auth.dto';

@Injectable()
export class BookingService {
  constructor(
    @InjectModel(Booking.name) private bookingModel: Model<Booking>,
  ) {}

  async createBookingDetails(createBookingDto: CreateBookingDto) {
    try {
      const bookTour = new this.bookingModel(createBookingDto);
      return await bookTour.save();
    } catch (e) {
      throw new InternalServerErrorException('Booking failed');
    }
  }

  async createUserDetails(createBookingDto ) {
    const {fullName, phone, email } = createBookingDto;

    const isMatch = fullName && phone && email;

    if (!isMatch) {
      throw new InternalServerErrorException('User data is not valid');
    }

    return { message: 'User data verified successfully' };
  }

  async getUserTickets(userId: string) {
    return await this.bookingModel.find({ userId });
  }
}

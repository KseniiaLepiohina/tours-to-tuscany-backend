import { Controller, Post, Body, Get, Query } from '@nestjs/common';
import { BookingService } from './booking.service';
import { CreateBookingDto } from './dto/create-booking.dto';
import { CreateAuthDto } from 'src/auth/dto/create-auth.dto';

@Controller('booking')
export class BookingController {
  constructor(private readonly bookingService: BookingService) {}

  @Post('/details')
  async createBookingDetails(@Body() createBookingDto: CreateBookingDto) {
    return this.bookingService.createBookingDetails(createBookingDto);
  }

  @Post('/user')
  async createUserDetails(@Body() createAuthDto: CreateAuthDto) {
    return this.bookingService.createUserDetails(createAuthDto);
  }

  @Get('/tickets')
  async getTickets(@Query('userId') userId: string) {
    return this.bookingService.getUserTickets(userId);
  }
}

import { PartialType } from '@nestjs/mapped-types';
import { CreateBookingDto } from './create-booking.dto';
import { IsPhoneNumber } from 'class-validator';

export class UpdateBookingDto extends PartialType(CreateBookingDto) {
    @IsPhoneNumber()
  phone:number;
}

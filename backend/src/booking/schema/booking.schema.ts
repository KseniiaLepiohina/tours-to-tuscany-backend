import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Booking extends Document {
  @Prop()
  img: string;

  @Prop()
  title: string;

  @Prop()
  date: string;

  @Prop()
  time: string;

  @Prop()
  PaymentMethod: string;

  @Prop()
  Status: string;

  @Prop()
  Price: number;

  @Prop()
  userId: string;
}

export const BookingSchema = SchemaFactory.createForClass(Booking);

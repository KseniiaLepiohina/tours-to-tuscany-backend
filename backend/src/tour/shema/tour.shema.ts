import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { Collection, HydratedDocument } from 'mongoose';

export type TourDocument = HydratedDocument<Tour>;

@Schema({ collection: 'avaliabletours' })
export class Tour {
  @Prop({ required: true, unique: true })
  id: number;

  @Prop()
  img: string;

  @Prop()
  title: string;

  @Prop()
  short_description: string;

  @Prop()
  details: string;

  @Prop()
  adultPrice: number;

  @Prop()
  childPrice: number;

  @Prop()
  infant: number;

  @Prop()
  people: string;

  @Prop()
  visit: string;

  @Prop()
  duration: string;

  @Prop()
  departure: string;

  @Prop()
  guide: string;

  @Prop()
  language: string;

  @Prop()
  transport: string;

  @Prop()
  fees: number;

  @Prop()
  img1: string;

  @Prop()
  img2: string;

  @Prop()
  img3: string;

  @Prop()
  img4: string;

  @Prop()
  img5: string;

  @Prop()
  img6: string;

  @Prop()
  img7: string;

  @Prop()
  name1: string;

  @Prop()
  review1: string;

  @Prop()
  name2: string;

  @Prop()
  review2: string;

  @Prop()
  name3: string;

  @Prop()
  review3: string;

  @Prop()
  name4: string;

  @Prop()
  review4: string;
}

export const TourSchema = SchemaFactory.createForClass(Tour);

// Example for connecting another schema (optional usage)

//for connect two tables in Db  in one common
// /*for combine another schema */
// @Prop({type:mongoose.Schema.Types.ObjectId,ref:''})

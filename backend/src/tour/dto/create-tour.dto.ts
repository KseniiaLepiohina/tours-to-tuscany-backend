import { IsNumber, IsOptional, IsString } from "class-validator";

export class CreateTourDto {
  @IsOptional()
  @IsString()
  _id: string;
  @IsNumber()
  id:number;
  @IsString()
  img: string;
  @IsString()
  title: string;
  @IsString()
  short_description: String;
  @IsString()
  details: string;
  @IsNumber()
  adultPrice: number;
  @IsNumber()
  childPrice: number;
  @IsNumber()
  infant: number;
  @IsString()
  people: string;
  @IsString()
  visit: string;
  @IsString()
  duration: string;
  @IsString()
  departure: string;
  @IsString()
  guide: string;
  @IsString()
  language: string;
  @IsString()
  transport: string;
  @IsString()
  fees: string;
  @IsString()
  img1: string;
  @IsString()
  img2: string;
  @IsString()
  img3: string;
  @IsString()
  img4: string;
  @IsString()
  img5: string;
  @IsString()
  img6: string;
  @IsString()
  img7: string;
  @IsString()
  name1: string;
  @IsString()
  review1: string;
  @IsString()
  name2: string;
  @IsString()
  review2: string;
  @IsString()
  name3: string;
  @IsString()
  review3: string;
  @IsString()
  name4: string;
  @IsString()
  review4: string;
}

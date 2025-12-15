import { IsNumber, IsOptional, IsString } from 'class-validator';

export class CreateTourDto {
  @IsString()
  title: string;

  @IsString()
  description: string;

  @IsNumber()
  price: number;

  @IsString()
  duration: string;

  @IsString()
  details: string;

  @IsString()
  group_size: string;

  @IsOptional()
  @IsString()
  transport?: string;

  @IsOptional()
  @IsString()
  depart_area?: string;

  @IsOptional()
  @IsString()
  guide?: string;

  @IsOptional()
  @IsString()
  language?: string;

  @IsString()
  fees: string;

  @IsOptional()
  @IsNumber()
  child_price?: number;

  @IsOptional()
  @IsNumber()
  infant_price?: number;
}

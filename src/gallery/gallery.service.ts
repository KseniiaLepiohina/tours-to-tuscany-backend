import { BadRequestException, HttpStatus, Injectable, NotFoundException } from '@nestjs/common';
import { CreateGalleryDto } from './dto/create-gallery.dto';
import { UpdateGalleryDto } from './dto/update-gallery.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Gallery } from './entities/gallery.entity';
import { DataSource, Repository } from 'typeorm';
import { response } from 'express';
import { Tour } from 'src/tours/entity/tour.entity';

@Injectable()
export class GalleryService {
 
  constructor(
      @InjectRepository(Gallery)
  private readonly galleryRepository:Repository<Gallery>,
  private readonly dataSource: DataSource,

  ) {}
  private  readonly API = process.env.UNSPLASH_API
  private  readonly ACCESSS_KEY=process.env.UNSPLASH_ACCESS_KEY
  private  readonly SECRET_KEY=process.env.UNSPLASH_SECRET_KEY

async findAll(location:string) {
  try {
    const tour = await this.dataSource
      .getRepository(Tour)
      .createQueryBuilder('t')
      .select(['t.location'])
      .where('t.location = :location',{location})
      .getOne();

    if (!tour || !tour.location) {
      throw new NotFoundException('Локацію для цього туру не знайдено');
    }

    const locationName = tour.location;

    const response = await fetch(
      `${this.API}/search/photos?query=${encodeURIComponent(locationName)}&per_page=4&client_id=${this.ACCESSS_KEY}`
    );

    if (!response.ok) {
      throw new Error(`Unsplash API error: ${response.statusText}`);
    }

    const galleryData = await response.json();

    return {
      location: locationName,
      photos: galleryData.results 
    };
  } catch (error) {
    console.error(error);
    throw new BadRequestException('Не вдалося отримати фото з Unsplash');
  }
}


}

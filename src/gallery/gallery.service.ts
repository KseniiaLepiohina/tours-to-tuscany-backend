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
    private readonly galleryRepository: Repository<Gallery>,
    private readonly dataSource: DataSource,

  ) { }
  private readonly API = process.env.UNSPLASH_API
  private readonly ACCESSS_KEY = process.env.UNSPLASH_ACCESS_KEY
  private readonly SECRET_KEY = process.env.UNSPLASH_SECRET_KEY

  
    async findAll(locationQuery: string) {
  try {
    const locations = [
      { id: 1, locationName: "Montepulciano" },
      { id: 2, locationName: "Lucca" },
      { id: 3, locationName: "Cinque Terre" },
      { id: 4, locationName: "Siena" },
      { id: 5, locationName: "Lucca Hills" },
      { id: 6, locationName: "Gardaland" }
    ];

    const foundLocation = locations.find(
      (l) => l.locationName.toLowerCase() === locationQuery.toLowerCase()
    );

    if (!foundLocation) {
      console.error(`Локацію не знайдено в списку: ${locationQuery}`);
      throw new NotFoundException(`Локацію "${locationQuery}" не знайдено`);
    }

    const locationName = foundLocation.locationName;

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
    if (error instanceof NotFoundException) throw error;
    throw new BadRequestException('Помилка при отриманні галереї');
  }
}
  }


import { BadRequestException, HttpStatus, Injectable, NotFoundException } from '@nestjs/common';
import { CreateGalleryDto } from './dto/create-gallery.dto';
import { UpdateGalleryDto } from './dto/update-gallery.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Gallery } from './entities/gallery.entity';
import { DataSource, Repository } from 'typeorm';

@Injectable()
export class GalleryService {
 
  constructor(
      @InjectRepository(Gallery)
  private readonly galleryRepository:Repository<Gallery>,
  private readonly dataSource: DataSource,
  ) {}


async findAll(id: number) {
  try {
    const gallery = await this.dataSource
      .getRepository(Gallery)
      .createQueryBuilder('g')
      .select([
        'g.id',
        'g.image1_url',
        'g.image2_url',
        'g.image3_url',
        'g.image4_url',
      ])
      .where('g.tour_id = :id', { id }) 
      .getOne();

    console.log('✅ Query result:', gallery);
    if (!gallery) {
      throw new BadRequestException('No images found for this tour id');
    }
    return gallery;
  } catch (error) {
    throw new BadRequestException('Failed to get all images');
  }
}


}

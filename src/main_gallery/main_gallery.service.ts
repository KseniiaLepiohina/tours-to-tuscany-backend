import { BadRequestException, Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { CreateMainGalleryDto } from './dto/create-main_gallery.dto';
import { UpdateMainGalleryDto } from './dto/update-main_gallery.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { MainGallery } from './entities/main_gallery.entity';
import { DataSource, Repository } from 'typeorm';

@Injectable()
export class MainGalleryService {

  constructor(
    @InjectRepository(MainGallery)
    private readonly mainGalleryRepository: Repository<MainGallery>,
    private readonly dataSource: DataSource
  ) { }


  async findAllImagesById(id: number) {
    try {
      const main_gallery = await this.dataSource
        .getRepository(MainGallery)
        .createQueryBuilder('mg')
        .select([
          'mg.id',
          'mg.image_main_url',
          'mg.image1_url',
          'mg.image2_url',
          'mg.image3_url',
        ])
        .where('mg.id = :id', { id })
        .getOne();

      if (!main_gallery) {
        throw new BadRequestException('No images found for this tour id');
      }

      return main_gallery; // тут вже нормальний об’єкт, не raw
    } catch (error) {
      throw new BadRequestException('Failed to get image by id');
    }
  }
 

async findMainImg(id: number) {
  try {
    console.log('Looking for main image with id:', id);
    
    const mainImg = await this.mainGalleryRepository
      .createQueryBuilder('main_gallery')
      .select([
        'main_gallery.image_main_url'
      ])
      .where('main_gallery.id = :id', { id })
      .getOne();
      
    console.log('Found:', mainImg);

    if (!mainImg) {
     
      throw new BadRequestException(`Main image with ID ${id} not found.`);
    }
    
    return mainImg; 

  } catch (error) {
  
    if (error instanceof BadRequestException) {
      throw error;
    }
    console.error(error);
    throw new InternalServerErrorException('Failed to get image by id due to a database or server error.');
  }
}



}

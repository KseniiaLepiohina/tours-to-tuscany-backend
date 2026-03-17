import { BadRequestException, Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { MainGallery } from './entities/main_gallery.entity';
import { DataSource, Repository } from 'typeorm';

@Injectable()
export class MainGalleryService {
  findMainImage(id: number) {
    throw new Error('Method not implemented.');
  }

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

      return main_gallery; 
    } catch (error) {
      throw new BadRequestException('Failed to get image by id');
    }
  }
 

async findMainImg(id: number) {
  try {
    // Важливо: перевірте, як це поле називається у файлі main_gallery.entity.ts
    // Якщо там @Column() tour_id: number, то пишемо так:
    const mainImg = await this.mainGalleryRepository.findOne({
      where: { tour_id: id } as any, // Примусово шукаємо по tour_id
      select: ['image_main_url']
    });

    if (!mainImg) {
      console.log(`Image for tour_id ${id} not found`);
      return { image_main_url: null }; 
    }

    return mainImg;
  } catch (error) {
    console.error('Error in findMainImg:', error);
    throw new InternalServerErrorException('Database query failed');
  }
}



}

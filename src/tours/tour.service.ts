import { Injectable, BadRequestException, NotFoundException, InternalServerErrorException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DataSource, Repository } from 'typeorm';
import { Tour } from './entity/tour.entity';

@Injectable()
export class TourService {
  constructor(
    @InjectRepository(Tour)
    private readonly tourRepository: Repository<Tour>,
    private readonly dataSource: DataSource,
  ) {}

  async findAllTours() {
    try {
      const tours = await this.dataSource
        .getRepository(Tour)
        .createQueryBuilder("tour")
        .select()
        .getMany();

      return tours;
    } catch (error) {
      throw new BadRequestException('Tours not found');
    }
  }

  async findTourById(id: number) {
    try {
      const tour = await this.dataSource
        .getRepository(Tour)
        .createQueryBuilder('tour')
         .select([
        'tour.id',
        'tour.title',
        'tour.description',
        'tour.price',
        'tour.duration',
        'tour.details',
        'tour.group_size',
        'tour.transport',
        'tour.depart_area',
        'tour.guide',
        'tour.language',
        'tour.fees',
        'tour.child_price',
        'tour.infant_price',
      ])
        .where('tour.id = :id', { id })
        .getOne();

      if (!tour) {
        throw new NotFoundException('Tour not found');
      }

      return tour;
    } catch (error) {
      throw new InternalServerErrorException('Error fetching tour');
    }
  }

}

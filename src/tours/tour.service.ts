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

  async findAllTours(title:string, group_size:number, transport:string) {
    try {
      // const tours = await this.dataSource
      //   .getRepository(Tour)
      //   .createQueryBuilder("tour")
      //   .select()
      //   .getMany();
     
      // const filters = await this.dataSource
      // .getRepository(Tour)
      // .createQueryBuilder("searchByFilters");
      // const findByTitle = title ? filters.andWhere("tour.title === title") : null;
      // return tours;
      const query = this.dataSource
      .getRepository(Tour)
      .createQueryBuilder("tour");

      if(title) {
        query.andWhere("tour.title ILIKE :title", {title:`${title}`})
      };
      if(group_size) {
        query.andWhere("tour.group_size = :group_size", {group_size:`${group_size}`})
      };
      if(transport) {
        query.andWhere("tour.transport ILIKE :transport", {transport:`${transport}`})
      };
      return await query.getMany();
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

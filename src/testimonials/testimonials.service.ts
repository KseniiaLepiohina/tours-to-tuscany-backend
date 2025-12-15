import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateTestimonialDto } from './dto/create-testimonial.dto';
import { UpdateTestimonialDto } from './dto/update-testimonial.dto';
import { Testimonial } from './entities/testimonial.entity';
import { DataSource, Repository  } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class TestimonialsService {
  constructor(
      @InjectRepository(Testimonial) 
      private testimonialRepository:Repository<Testimonial>,
      private readonly dataSource :DataSource,

  ) {}
  

  async findAll() {
    try{
     const testimonials = await this.dataSource
     .getRepository(Testimonial)
     .createQueryBuilder("testimonial")
     .select()
     .getMany();
     return testimonials;
    }catch(error) {
      throw new BadRequestException('Failed to get all testimonials')
    }
  }

  async findOne(tour_id: number) {
  try {
    const testimonials = await this.dataSource
      .getRepository(Testimonial)
      .createQueryBuilder("t")
      .select([
        't.tour_id',
        't.reviewer_name',
        't.comment',
        't.created_at'
      ])
      .where('t.tour_id = :tour_id', { tour_id }) 
      .getRawMany(); 
    return testimonials;
  } catch (error) {
    console.error(error);
    throw new BadRequestException('Failed to get testimonials by tour_id');
  }
}
}

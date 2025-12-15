import { Controller, Get, Post, Body, Patch, Param, Delete, ParseIntPipe } from '@nestjs/common';
import { TestimonialsService } from './testimonials.service';
import { CreateTestimonialDto } from './dto/create-testimonial.dto';
import { UpdateTestimonialDto } from './dto/update-testimonial.dto';

@Controller('testimonials')
export class TestimonialsController {
  constructor(private readonly testimonialsService: TestimonialsService) {}

  @Get('allTestimonials')
  findAll() {
    return this.testimonialsService.findAll();
  }

  @Get('/:tour_id')
  findOne(@Param('tour_id', ParseIntPipe) tour_id: number) {
    return this.testimonialsService.findOne(tour_id);
  }

}

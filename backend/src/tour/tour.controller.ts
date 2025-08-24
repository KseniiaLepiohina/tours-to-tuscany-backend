import { Body, Controller, Get, Param, Query } from '@nestjs/common';
import { TourService } from './tour.service';
import { CreateTourDto } from './dto/create-tour.dto';

@Controller('tour')
export class TourController {
  constructor(private readonly tourService: TourService) {}

  @Get('/tours')
  async findAll() {
    return this.tourService.findAllTours();
  }

  @Get('/tours/:id')
  async findById(@Param('id') id:string) {
    return this.tourService.findById(id);
  }
}

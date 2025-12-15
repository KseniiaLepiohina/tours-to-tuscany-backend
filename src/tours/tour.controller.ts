import { Body, Controller, Get, Param, Query } from '@nestjs/common';
import { TourService } from './tour.service';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';

@Controller('tour')
export class TourController {
  constructor(private readonly tourService: TourService) {}

  @Get('/tours')
  @ApiOperation({
    summary:'Get all tours'
  })
  @ApiResponse({
    status:200,
    description:'Get all tours'
  })
  @ApiResponse({
    status:404,
    description:'Tours not found'
  })
  @ApiResponse({
    status:500,
    description:'Internal server error'
  })
  async findAll() {
    return this.tourService.findAllTours();
  }

  @Get('/:id')
@ApiResponse({ status: 200, description: 'Get a specific tour' })
@ApiResponse({ status: 404, description: 'Tour not found' })
@ApiResponse({ status: 500, description: 'Internal server error' })
async findById(@Param('id') id: string) {
  return this.tourService.findTourById(Number(id));
}


}

import { Body, Controller, Get, Param, Query } from '@nestjs/common';
import { TourService } from './tour.service';
import { ApiOperation, ApiQuery, ApiResponse } from '@nestjs/swagger';

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
  @ApiQuery({ name: 'title', required: false, type: String })
@ApiQuery({ name: 'group_size', required: false, type: Number })
@ApiQuery({ name: 'transport', required: false, type: String })
  async findAll(
    @Query("title") title:string,
     @Query("group_size" )group_size:number,
    @Query("transport" )transport:string

  ) {
    return this.tourService.findAllTours(title,group_size,transport);
  }

  @Get('/:id')
@ApiResponse({ status: 200, description: 'Get a specific tour' })
@ApiResponse({ status: 404, description: 'Tour not found' })
@ApiResponse({ status: 500, description: 'Internal server error' })
async findById(@Param('id') id: string) {
  return this.tourService.findTourById(Number(id));
}


}

import { Controller, Get, Post, Body, Patch, Param, Delete, ParseIntPipe, Query } from '@nestjs/common';
import { GalleryService } from './gallery.service';
import { CreateGalleryDto } from './dto/create-gallery.dto';
import { UpdateGalleryDto } from './dto/update-gallery.dto';

@Controller('gallery')
export class GalleryController {
  constructor(private readonly galleryService: GalleryService) {}

  @Get('search/:location')
  findAll(@Param('location') locationQuery: string) {
    console.log(locationQuery);
    const decodedLocation = decodeURIComponent(locationQuery); 
  return this.galleryService.findAll(decodedLocation);
  }

}

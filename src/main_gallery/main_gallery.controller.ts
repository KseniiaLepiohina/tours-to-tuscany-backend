import { Controller, Get, Post, Body, Patch, Param, Delete, ParseIntPipe } from '@nestjs/common';
import { MainGalleryService } from './main_gallery.service';
import { CreateMainGalleryDto } from './dto/create-main_gallery.dto';
import { UpdateMainGalleryDto } from './dto/update-main_gallery.dto';

@Controller('main-gallery')
export class MainGalleryController {
  constructor(private readonly mainGalleryService: MainGalleryService) { }


  @Get('/:id')
  findAll(@Param('id') id: number) {
    return this.mainGalleryService.findAllImagesById(id);
  }
  @Get('main_img/:id')
  findMainImg(@Param('id', ParseIntPipe) id: number) {
    return this.mainGalleryService.findMainImg(id);
  }

}

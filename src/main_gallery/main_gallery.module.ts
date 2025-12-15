import { Module } from '@nestjs/common';
import { MainGalleryService } from './main_gallery.service';
import { MainGalleryController } from './main_gallery.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MainGallery } from './entities/main_gallery.entity';

@Module({
  imports:[TypeOrmModule.forFeature([MainGallery])],
  controllers: [MainGalleryController],
  providers: [MainGalleryService],
})
export class MainGalleryModule {}

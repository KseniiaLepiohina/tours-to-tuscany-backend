import { Test, TestingModule } from '@nestjs/testing';
import { MainGalleryController } from './main_gallery.controller';
import { MainGalleryService } from './main_gallery.service';

describe('MainGalleryController', () => {
  let controller: MainGalleryController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MainGalleryController],
      providers: [MainGalleryService],
    }).compile();

    controller = module.get<MainGalleryController>(MainGalleryController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

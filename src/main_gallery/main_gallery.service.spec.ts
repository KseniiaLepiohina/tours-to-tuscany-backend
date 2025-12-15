import { Test, TestingModule } from '@nestjs/testing';
import { MainGalleryService } from './main_gallery.service';

describe('MainGalleryService', () => {
  let service: MainGalleryService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MainGalleryService],
    }).compile();

    service = module.get<MainGalleryService>(MainGalleryService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

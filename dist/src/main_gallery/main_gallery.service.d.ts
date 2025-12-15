import { MainGallery } from './entities/main_gallery.entity';
import { DataSource, Repository } from 'typeorm';
export declare class MainGalleryService {
    private readonly mainGalleryRepository;
    private readonly dataSource;
    constructor(mainGalleryRepository: Repository<MainGallery>, dataSource: DataSource);
    findAllImagesById(id: number): Promise<MainGallery>;
    findMainImg(id: number): Promise<MainGallery>;
}

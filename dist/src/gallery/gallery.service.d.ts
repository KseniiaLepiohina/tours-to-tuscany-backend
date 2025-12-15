import { Gallery } from './entities/gallery.entity';
import { DataSource, Repository } from 'typeorm';
export declare class GalleryService {
    private readonly galleryRepository;
    private readonly dataSource;
    constructor(galleryRepository: Repository<Gallery>, dataSource: DataSource);
    findAll(id: number): Promise<Gallery>;
}

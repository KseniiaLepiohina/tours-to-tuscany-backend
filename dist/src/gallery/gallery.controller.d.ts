import { GalleryService } from './gallery.service';
export declare class GalleryController {
    private readonly galleryService;
    constructor(galleryService: GalleryService);
    findAll(id: number): Promise<import("./entities/gallery.entity").Gallery>;
}

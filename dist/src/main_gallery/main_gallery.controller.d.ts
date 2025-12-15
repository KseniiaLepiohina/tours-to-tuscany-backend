import { MainGalleryService } from './main_gallery.service';
export declare class MainGalleryController {
    private readonly mainGalleryService;
    constructor(mainGalleryService: MainGalleryService);
    findAll(id: number): Promise<import("./entities/main_gallery.entity").MainGallery>;
    findMainImg(id: number): Promise<import("./entities/main_gallery.entity").MainGallery>;
}

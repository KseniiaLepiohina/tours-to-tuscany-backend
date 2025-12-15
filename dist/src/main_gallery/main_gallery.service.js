"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MainGalleryService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const main_gallery_entity_1 = require("./entities/main_gallery.entity");
const typeorm_2 = require("typeorm");
let MainGalleryService = class MainGalleryService {
    mainGalleryRepository;
    dataSource;
    constructor(mainGalleryRepository, dataSource) {
        this.mainGalleryRepository = mainGalleryRepository;
        this.dataSource = dataSource;
    }
    async findAllImagesById(id) {
        try {
            const main_gallery = await this.dataSource
                .getRepository(main_gallery_entity_1.MainGallery)
                .createQueryBuilder('mg')
                .select([
                'mg.id',
                'mg.image_main_url',
                'mg.image1_url',
                'mg.image2_url',
                'mg.image3_url',
            ])
                .where('mg.id = :id', { id })
                .getOne();
            if (!main_gallery) {
                throw new common_1.BadRequestException('No images found for this tour id');
            }
            return main_gallery;
        }
        catch (error) {
            throw new common_1.BadRequestException('Failed to get image by id');
        }
    }
    async findMainImg(id) {
        try {
            console.log('Looking for main image with id:', id);
            const mainImg = await this.mainGalleryRepository
                .createQueryBuilder('main_gallery')
                .select([
                'main_gallery.image_main_url'
            ])
                .where('main_gallery.id = :id', { id })
                .getOne();
            console.log('Found:', mainImg);
            if (!mainImg) {
                throw new common_1.BadRequestException(`Main image with ID ${id} not found.`);
            }
            return mainImg;
        }
        catch (error) {
            if (error instanceof common_1.BadRequestException) {
                throw error;
            }
            console.error(error);
            throw new common_1.InternalServerErrorException('Failed to get image by id due to a database or server error.');
        }
    }
};
exports.MainGalleryService = MainGalleryService;
exports.MainGalleryService = MainGalleryService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(main_gallery_entity_1.MainGallery)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.DataSource])
], MainGalleryService);
//# sourceMappingURL=main_gallery.service.js.map
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
exports.GalleryService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const gallery_entity_1 = require("./entities/gallery.entity");
const typeorm_2 = require("typeorm");
let GalleryService = class GalleryService {
    galleryRepository;
    dataSource;
    constructor(galleryRepository, dataSource) {
        this.galleryRepository = galleryRepository;
        this.dataSource = dataSource;
    }
    async findAll(id) {
        try {
            const gallery = await this.dataSource
                .getRepository(gallery_entity_1.Gallery)
                .createQueryBuilder('g')
                .select([
                'g.id',
                'g.image1_url',
                'g.image2_url',
                'g.image3_url',
                'g.image4_url',
            ])
                .where('g.tour_id = :id', { id })
                .getOne();
            console.log('✅ Query result:', gallery);
            if (!gallery) {
                throw new common_1.BadRequestException('No images found for this tour id');
            }
            return gallery;
        }
        catch (error) {
            throw new common_1.BadRequestException('Failed to get all images');
        }
    }
};
exports.GalleryService = GalleryService;
exports.GalleryService = GalleryService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(gallery_entity_1.Gallery)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.DataSource])
], GalleryService);
//# sourceMappingURL=gallery.service.js.map
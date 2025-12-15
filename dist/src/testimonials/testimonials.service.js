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
exports.TestimonialsService = void 0;
const common_1 = require("@nestjs/common");
const testimonial_entity_1 = require("./entities/testimonial.entity");
const typeorm_1 = require("typeorm");
const typeorm_2 = require("@nestjs/typeorm");
let TestimonialsService = class TestimonialsService {
    testimonialRepository;
    dataSource;
    constructor(testimonialRepository, dataSource) {
        this.testimonialRepository = testimonialRepository;
        this.dataSource = dataSource;
    }
    async findAll() {
        try {
            const testimonials = await this.dataSource
                .getRepository(testimonial_entity_1.Testimonial)
                .createQueryBuilder("testimonial")
                .select()
                .getMany();
            return testimonials;
        }
        catch (error) {
            throw new common_1.BadRequestException('Failed to get all testimonials');
        }
    }
    async findOne(tour_id) {
        try {
            const testimonials = await this.dataSource
                .getRepository(testimonial_entity_1.Testimonial)
                .createQueryBuilder("t")
                .select([
                't.tour_id',
                't.reviewer_name',
                't.comment',
                't.created_at'
            ])
                .where('t.tour_id = :tour_id', { tour_id })
                .getRawMany();
            return testimonials;
        }
        catch (error) {
            console.error(error);
            throw new common_1.BadRequestException('Failed to get testimonials by tour_id');
        }
    }
};
exports.TestimonialsService = TestimonialsService;
exports.TestimonialsService = TestimonialsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_2.InjectRepository)(testimonial_entity_1.Testimonial)),
    __metadata("design:paramtypes", [typeorm_1.Repository,
        typeorm_1.DataSource])
], TestimonialsService);
//# sourceMappingURL=testimonials.service.js.map
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Gallery = void 0;
const tour_entity_1 = require("../../tours/entity/tour.entity");
const typeorm_1 = require("typeorm");
let Gallery = class Gallery {
    id;
    tour_id;
    tour;
    image1_url;
    image2_url;
    image3_url;
    image4_url;
};
exports.Gallery = Gallery;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Gallery.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], Gallery.prototype, "tour_id", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => tour_entity_1.Tour, (tour) => tour.gallery, { onDelete: 'CASCADE' }),
    (0, typeorm_1.JoinColumn)({ name: 'tour_id' }),
    __metadata("design:type", tour_entity_1.Tour)
], Gallery.prototype, "tour", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'text'
    }),
    __metadata("design:type", String)
], Gallery.prototype, "image1_url", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'text'
    }),
    __metadata("design:type", String)
], Gallery.prototype, "image2_url", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'text'
    }),
    __metadata("design:type", String)
], Gallery.prototype, "image3_url", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'text'
    }),
    __metadata("design:type", String)
], Gallery.prototype, "image4_url", void 0);
exports.Gallery = Gallery = __decorate([
    (0, typeorm_1.Entity)('tour_gallery')
], Gallery);
//# sourceMappingURL=gallery.entity.js.map
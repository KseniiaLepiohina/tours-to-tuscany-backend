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
exports.MainGalleryController = void 0;
const common_1 = require("@nestjs/common");
const main_gallery_service_1 = require("./main_gallery.service");
let MainGalleryController = class MainGalleryController {
    mainGalleryService;
    constructor(mainGalleryService) {
        this.mainGalleryService = mainGalleryService;
    }
    findAll(id) {
        return this.mainGalleryService.findAllImagesById(id);
    }
    findMainImg(id) {
        return this.mainGalleryService.findMainImg(id);
    }
};
exports.MainGalleryController = MainGalleryController;
__decorate([
    (0, common_1.Get)('/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], MainGalleryController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)('main_img/:id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], MainGalleryController.prototype, "findMainImg", null);
exports.MainGalleryController = MainGalleryController = __decorate([
    (0, common_1.Controller)('main-gallery'),
    __metadata("design:paramtypes", [main_gallery_service_1.MainGalleryService])
], MainGalleryController);
//# sourceMappingURL=main_gallery.controller.js.map
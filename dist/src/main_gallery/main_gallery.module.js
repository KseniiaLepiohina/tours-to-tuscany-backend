"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MainGalleryModule = void 0;
const common_1 = require("@nestjs/common");
const main_gallery_service_1 = require("./main_gallery.service");
const main_gallery_controller_1 = require("./main_gallery.controller");
const typeorm_1 = require("@nestjs/typeorm");
const main_gallery_entity_1 = require("./entities/main_gallery.entity");
let MainGalleryModule = class MainGalleryModule {
};
exports.MainGalleryModule = MainGalleryModule;
exports.MainGalleryModule = MainGalleryModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([main_gallery_entity_1.MainGallery])],
        controllers: [main_gallery_controller_1.MainGalleryController],
        providers: [main_gallery_service_1.MainGalleryService],
    })
], MainGalleryModule);
//# sourceMappingURL=main_gallery.module.js.map
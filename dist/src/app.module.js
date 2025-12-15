"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const tour_module_1 = require("./tours/tour.module");
const config_1 = require("@nestjs/config");
const typeorm_1 = require("@nestjs/typeorm");
const main_gallery_module_1 = require("./main_gallery/main_gallery.module");
const testimonials_module_1 = require("./testimonials/testimonials.module");
const gallery_module_1 = require("./gallery/gallery.module");
const users_module_1 = require("./users/users.module");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot({
                isGlobal: true,
                envFilePath: '.env',
            }),
            typeorm_1.TypeOrmModule.forRootAsync({
                imports: [config_1.ConfigModule],
                inject: [config_1.ConfigService],
                useFactory: (ConfigService) => ({
                    type: 'postgres',
                    host: ConfigService.get('DB_HOST'),
                    port: ConfigService.get('DB_PORT'),
                    username: ConfigService.get('DB_USERNAME'),
                    password: ConfigService.get('DB_PASSWORD'),
                    database: ConfigService.get('DB_NAME'),
                    autoLoadEntities: true,
                    synchronize: true,
                }),
            }),
            tour_module_1.TourModule,
            main_gallery_module_1.MainGalleryModule,
            gallery_module_1.GalleryModule,
            testimonials_module_1.TestimonialsModule,
            users_module_1.UsersModule,
        ],
        controllers: [app_controller_1.AppController],
        providers: [app_service_1.AppService],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map
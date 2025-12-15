"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateMainGalleryDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_main_gallery_dto_1 = require("./create-main_gallery.dto");
class UpdateMainGalleryDto extends (0, mapped_types_1.PartialType)(create_main_gallery_dto_1.CreateMainGalleryDto) {
}
exports.UpdateMainGalleryDto = UpdateMainGalleryDto;
//# sourceMappingURL=update-main_gallery.dto.js.map
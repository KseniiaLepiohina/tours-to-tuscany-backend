import { PartialType } from '@nestjs/mapped-types';
import { CreateMainGalleryDto } from './create-main_gallery.dto';

export class UpdateMainGalleryDto extends PartialType(CreateMainGalleryDto) {}

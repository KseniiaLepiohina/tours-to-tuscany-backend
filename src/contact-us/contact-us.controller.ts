import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ContactUsService } from './contact-us.service';
import { CreateContactUsDto } from './dto/create-contact-us.dto';
import { UpdateContactUsDto } from './dto/update-contact-us.dto';

@Controller('contact-us')
export class ContactUsController {
  constructor(private readonly contactUsService: ContactUsService) {}

  @Post()
  create(
    @Param('fullName')fullName:string,
    @Param('message') message:string,
    @Param('email') email:string
  ) {
    return this.contactUsService.contactUsForm(fullName,message,email);
  }
}

import { Injectable } from '@nestjs/common';
import { CreateMailDto } from './dto/create-mail.dto';
import { UpdateMailDto } from './dto/update-mail.dto';

@Injectable()
export class MailService {
  create(createMailDto: CreateMailDto) {
    return 'This action adds a new mailer';
  }

  findAll() {
    return `This action returns all mailer`;
  }

  findOne(id: number) {
    return `This action returns a #${id} mailer`;
  }

  update(id: number, updateMailerDto: UpdateMailDto) {
    return `This action updates a #${id} mailer`;
  }

  remove(id: number) {
    return `This action removes a #${id} mailer`;
  }
}

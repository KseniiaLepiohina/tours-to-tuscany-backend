import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { DataSource } from 'typeorm';
import { ContactUs } from './entities/contact-us.entity';

@Injectable()
export class ContactUsService {
  constructor (
private readonly dataSource:DataSource
  ) {}

 async contactUsForm ( fullName:string,message:string, email:string) {
  try{
    const newMail = await this.dataSource
    .createQueryBuilder()
    .insert()
    .into(ContactUs) 
    .values({
      fullName,
      email,
      message
    })
    .execute()
    return newMail;
  }catch(error){
throw new HttpException('Error with posting new message', HttpStatus.INTERNAL_SERVER_ERROR); 
  }
 }
}

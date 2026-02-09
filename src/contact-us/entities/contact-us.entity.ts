import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity('contact_us')
export class ContactUs {
  @PrimaryGeneratedColumn()
  id: number;
  @Column({
    type: 'varchar',
    length: 255
  })
  fullName: string;
  @Column({
    type: 'varchar',
    length: 255
  })
  email: string
  @Column({
    type: 'varchar',
    length: 255
  })
  message: string;
}

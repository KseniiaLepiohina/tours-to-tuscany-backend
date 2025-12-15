import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('tours')
export class Tour {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({type:'varchar', length:255})
  title: string;

  @Column({type:'varchar', length:255})
  description: string;

  @Column({ type: 'numeric', precision: 10, scale: 2 })
  price: number;

  @Column({type:'varchar', length:100})
  duration: string;

  @Column({ type: 'text' })
  details: string;

  @Column({type:'int'})
  group_size: number;

  @Column({type:'varchar',length:100})
  transport: string;

  @Column({type:'varchar',length:100})
  depart_area: string;

  @Column({type:'varchar',length:100})
  guide: string;

  @Column({type:'varchar',length:100})
  language: string;

  @Column({type:'varchar',length:100})
  fees: string;

  @Column({ type: 'numeric', precision: 10, scale: 2, nullable: true })
  child_price: number;
  @Column({ type: 'numeric', precision: 10, scale: 2, nullable: true })
  infant_price: number ;
  user: any;
  bookings: any;
  ticket: any;
  testimonials: any;
  main_gallery: any;
  gallery: any;
  booking: any;
}

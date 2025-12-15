import { Tour } from "src/tours/entity/tour.entity";
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity('tour_gallery')
export class Gallery {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  tour_id: number;

  @ManyToOne(() => Tour, (tour) => tour.gallery, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'tour_id' })
  tour: Tour

  @Column({
    type:'text'
  })
  image1_url: string;

  @Column({
    type:'text'
  })
  image2_url: string;

  @Column({
    type:'text'
  })
  image3_url: string;

  @Column({
    type:'text'
  })
  image4_url: string;
}


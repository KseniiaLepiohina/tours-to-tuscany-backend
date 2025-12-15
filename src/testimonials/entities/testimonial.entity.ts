import { Tour } from "src/tours/entity/tour.entity";
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity('tour_testimonials')
export class Testimonial {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    type: 'varchar', length: 255,
  })
  reviewer_name: string;
  @Column({type:'text'})
  comment: string;
  @Column({
    type: 'timestamp with time zone',
    default: () => 'CURRENT_TIMESTAMP'
  })
  created_at: string;

  @ManyToOne(() => Tour, (tour) => tour.testimonials, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'tour_id' })
  tour: Tour
}


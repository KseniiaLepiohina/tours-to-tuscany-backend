import { Tour } from "src/tours/entity/tour.entity";
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity('tour_main_gallery')
export class MainGallery {
  @PrimaryGeneratedColumn()
  id:number;
  @Column({
    type:'text'
  })
  image_main_url:string;
  @Column({
    type:'text'
  })
  image1_url:string;
  @Column({
    type:'text'
  })
  image2_url:string;
  @Column({
    type:'text'
  })
  image3_url:string;
  @ManyToOne(()=> Tour,(tour)=> tour.main_gallery,{onDelete:'CASCADE'})
  @JoinColumn({name:'tour_id'})
  tour:Tour
}

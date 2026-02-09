import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('tour_users')
export class User {
  @PrimaryGeneratedColumn()
  id:number;
  @Column({type:'varchar', length:255})
  fullName:string;
  @Column({type:'varchar', length:255})
  email:string;
  @Column({type:'varchar', length:255})
  password:string;

}

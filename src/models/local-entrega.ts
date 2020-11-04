import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  Unique,
  CreateDateColumn,
  UpdateDateColumn
} from "typeorm";
import { Length, IsNotEmpty } from "class-validator";

@Entity("localentrega")
export class LocalEntrega {
  
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  @Length(2, 100)
  descricao: string;

  @Column()
  @CreateDateColumn()
  createdAt: Date;

  @Column()
  @UpdateDateColumn()
  updatedAt: Date;
}
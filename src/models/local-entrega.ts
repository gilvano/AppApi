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

  @CreateDateColumn({ name: "create_at" })
  createdAt: Date;
  
  @UpdateDateColumn({ name: "update_at" })
  updatedAt: Date;
}
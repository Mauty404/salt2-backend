import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Notification {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  title: string;

  @Column()
  company: string;

  @Column()
  details: string;

  @CreateDateColumn({ name: 'created_at' })
  creationDate: Date;
}

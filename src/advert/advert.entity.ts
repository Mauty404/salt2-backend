import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
} from 'typeorm';

@Entity()
export class Advert {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  title: string;

  @Column({ type: 'float' })
  price: number;

  @Column()
  description: string;

  @Column()
  link: string;

  @Column({ type: 'int' })
  rate: number;

  @CreateDateColumn({ name: 'created_at' })
  creationDate: Date;
}

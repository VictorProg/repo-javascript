import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { TaskStatus } from '../enums/taskStatus';

@Entity()
export class Task {
  @PrimaryGeneratedColumn()
  // @Column()
  id: number;
  @Column({ type: 'varchar', length: 30 })
  title: string;
  @Column({ type: 'varchar', length: 30 })
  description: string;
  @Column({
    type: 'enum',
    enum: TaskStatus,
    default: 'OPEN',
  })
  status: string;
}

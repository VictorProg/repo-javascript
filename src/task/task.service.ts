import { Injectable } from '@nestjs/common';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Task } from './entities/task.entity';
import { Repository } from 'typeorm';

@Injectable()
export class TaskService {
  constructor(
    @InjectRepository(Task) private readonly taskRepository: Repository<Task>,
  ) {}

  create(createTaskDto: CreateTaskDto) {
    const task: Task = new Task();
    task.title = createTaskDto.title;
    task.description = createTaskDto.description;
    task.status = createTaskDto.status;
    return this.taskRepository.save(task);
  }

  findAll() {
    return this.taskRepository.find();
  }

  findOne(id: number) {
    return this.taskRepository.findOneBy({ id });
  }

  update(id: number, updateTaskDto: UpdateTaskDto) {
    const task: Task = new Task();
    task.title = updateTaskDto.title;
    task.description = updateTaskDto.description;
    task.status = updateTaskDto.status;
    return this.taskRepository.update(id, task);
  }

  remove(id: number) {
    return this.taskRepository.delete(id);
  }
}

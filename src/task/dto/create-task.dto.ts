import {
  IsAlphanumeric,
  IsEnum,
  IsNotEmpty,
  IsString,
  MaxLength,
  MinLength,
} from 'class-validator';

import { TaskStatus } from '../enums/taskStatus';

export class CreateTaskDto {
  @IsString()
  @MinLength(4, { message: 'Title must have atleast 4 characters.' })
  @IsNotEmpty()
  @IsAlphanumeric('en-US', {
    message: 'Title does not allow other than alpha numeric chars.',
  })
  title: string;

  @IsNotEmpty()
  @MaxLength(200, { message: 'Description must have at most 200 characters.' })
  description: string;

  @IsString()
  @IsEnum(TaskStatus, { message: 'Invalid status' })
  status: string;
}

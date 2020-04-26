import { Injectable, NotFoundException } from '@nestjs/common';
import { Task, TaskStatus } from './task.model';
import * as uuid from 'uuid/v1'
import { CreateTaskDto } from './dto/create-task.dto'
import { GetTasksFilterDto } from './dto/get-tasks-filter.dto';

@Injectable()
export class TasksService {
  private tasks: Task[] = []; // gán cái task = các Task( bản ghi) trong task.model

  //GET ALL TASKS
  getAllTasks(): Task[] {  //lấy ra các bản ghi  từ Task
    return this.tasks;
  }

  //GET TASK WITH FILTER
  getTaskWithFilter(filterDto: GetTasksFilterDto): Task[] {
    const { status, search } = filterDto;
    let tasks = this.getAllTasks();

    if (status) {
      tasks = tasks.filter(task => task.status === status)
    }

    if (search) {
      tasks = tasks.filter(task =>
        task.title.includes(search) ||
        task.description.includes(search)
      );
    }
    return tasks;
  }
  //GET TASK BY ID
  getTaskById(id: string): Task {
    const found= this.tasks.find(task => task.id === id);
    if(!found){
      throw new NotFoundException(`Task with ID "${id}"`)
    }
    return found;
  }

  //CREATE TASK
  createTask(createTaskDto: CreateTaskDto): Task {
    //sủ dụng uuid để gán 1 cái id cho nó --> npm install --save uuid -->import
    //khởi tạo 1 task
    const { title, description } = createTaskDto;
    const task: Task = {
      id: uuid(),
      title,
      description,
      status: TaskStatus.OPEN,
    }
    // push vào array
    this.tasks.push(task);
    return task;
  }

  //DELETE TASK
  deleteTask(id: string): void {
    const found = this.getTaskById(id);
    this.tasks = this.tasks.filter(task => task.id !== found.id);
  }

  //UPDATE TASKSTATUS
  updateTaskStatus(id: string, status: TaskStatus) {
    const task = this.getTaskById(id);
    task.status = status;
    return task;
  }
}

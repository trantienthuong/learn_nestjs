import { Injectable } from '@nestjs/common';
import { Task, TaskStatus } from './task.model';
import * as uuid from 'uuid/v1'
import { CreateTaskDto } from './dto/create-task.dto'

@Injectable()
export class TasksService {
  private tasks: Task[] = []; // gán cái task = các Task( bản ghi) trong task.model

  //GET ALL TASKS
  getAllTasks(): Task[] {  //lấy ra các bản ghi  từ Task
    return this.tasks;
  }


  //GET TASK BY ID
  getTaskById(id: string): Task {
    return this.tasks.find(task => task.id === id);
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
    this.tasks = this.tasks.filter(task => task.id !== id);
  }

  //UPDATE TASKSTATUS
  updateTaskStatus(id:string, status: TaskStatus){
    const task =this.getTaskById(id);
    task.status =status;
    return task;
  }
}

import { Controller, Get } from '@nestjs/common';
import { TasksService } from './tasks.service';

@Controller('tasks')
export class TasksController {
  constructor(private tasksService : TasksService){}
  //khai báo các phương thức thông qua tasksService
  @Get()
  getAllTasks(){
    return this.tasksService.getAllTasks();
  }
}

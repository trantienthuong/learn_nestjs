import { Controller, Get, Post, Body, Param, Delete, Patch } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { Task, TaskStatus } from './task.model';
import { CreateTaskDto } from './dto/create-task.dto'
@Controller('tasks')
export class TasksController {
  constructor(private tasksService: TasksService) { }
  //khai báo các phương thức thông qua tasksService

  //GET ALL TASKS
  @Get()
  getAllTasks(): Task[] {
    return this.tasksService.getAllTasks();
  }

  //GET TASK BY ID
  @Get('/:id')
  getTaskById(@Param('id') id: string): Task {
    return this.tasksService.getTaskById(id);
  }

  //CREATE A TASK
  @Post()
  createTask(
    // @Body('title') title: string,
    // @Body('description') description: string,
    @Body() createTaskDto: CreateTaskDto
  ): Task {
    // console.log('title', title)
    // console.log('description',description)
    return this.tasksService.createTask(createTaskDto);
  }

  //DELETE TASK
  @Delete('/:id')
  deleteTask(@Param('id') id: string): void {
    this.tasksService.deleteTask(id);
  }

  //UPDATE TASKSTATUS
  @Patch('/:id/status')
  updateTaskStatus(
    @Param('id') id: string,
    @Body('status') status: TaskStatus,
  ): Task {
    return this.tasksService.updateTaskStatus(id, status);
  }
}

import { Module } from '@nestjs/common';
import { TasksController } from './tasks.controller';
import { TasksService } from './tasks.service';

@Module({
  controllers: [TasksController],
  providers: [TasksService] // tự động import các controller, service sau khi sử dụng (nest g controller/service tasks --no-spec)
})
export class TasksModule {}

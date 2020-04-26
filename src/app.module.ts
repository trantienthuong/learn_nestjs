import { Module } from '@nestjs/common';
import { TasksModule } from './tasks/tasks.module';

@Module({
  imports: [TasksModule], //tự động đc import sau khi khởi tạo 1 forder mới (nest g module + tên)
})
export class AppModule {}

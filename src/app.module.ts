import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CourseService } from './course/course.service';
import { CourseModule } from './course/course.module';

@Module({
  imports: [CourseModule],
  controllers: [AppController],
  providers: [AppService, CourseService],
})
export class AppModule {}


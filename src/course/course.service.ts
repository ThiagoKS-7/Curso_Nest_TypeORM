import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateCourseDto } from './dto/create-course.dto';
import { UpdateCourseDto } from './dto/update-course.dto';
import { Course } from './entities/course.entity';

@Injectable()
export class CourseService {
  private courses: Course[] = [
    {
        id: 1,
        name: "Fundamentos do framework Nestjs",
        description: "Lorem ipsum sit amet",
        tags: ["NestJS", "Node.js"]
    }
  ];
  create(createCourseDto: CreateCourseDto) {
    this.courses.push(createCourseDto);
    return "Curso criado!";
  }

  findAll() {
    return this.courses;
  }

  findOne(id: number) {
    const course = this.courses.find((el:Course) => el.id === Number(id));
    if (course) {
        return course;
    }
    throw new HttpException(`Course #${id} not found`, HttpStatus.NOT_FOUND);
  }

  update(id: number, updateCourseDto: UpdateCourseDto) {
    const indexCourse = this.courses.findIndex((course:Course) => course.id === Number(id));
    this.courses[indexCourse] = updateCourseDto;
    return `Curso ${id} alterado!`;
  }

  remove(id: number) {
    const indexCourse = this.courses.findIndex((course:Course) => course.id === Number(id));
    if (indexCourse > 0) {
        this.courses.splice(indexCourse, 1);
    }
    return `Curso ${id} excluído!`;
  }
}
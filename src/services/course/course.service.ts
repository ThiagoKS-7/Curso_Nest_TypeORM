import { Injectable } from '@nestjs/common';
import { Course } from './course.entity';

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

    findAll() {
        return this.courses;
    }

    findOne(id:string) {
        return this.courses.find((el:Course) => el.id === Number(id));
    }

    create(createCourseDto:any) {
        this.courses.push(createCourseDto);
        return "Curso criado!";
    }

    update(id:string, updateCourseDto:any) {
        const indexCourse = this.courses.findIndex((course:Course) => course.id === Number(id));
        this.courses[indexCourse] = updateCourseDto;
        return `Curso ${id} alterado!`;
    }

    delete(id:string) {
        const indexCourse = this.courses.findIndex((course:Course) => course.id === Number(id));
        if (indexCourse > 0) {
            this.courses.splice(indexCourse, 1);
        }
        return `Curso ${id} excluído!`;
    }
}

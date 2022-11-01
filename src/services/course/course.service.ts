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

    create(body:any) {
        return "Curso criado!";
    }

    update(id:string) {
        this.courses.find((el:Course) => el.id === Number(id));
        return `Curso ${id} alterado!`;
    }

    delete(id:string) {
        this.courses.find((el:Course) => el.id === Number(id));
        return `Curso ${id} excluído!`;
    }
}

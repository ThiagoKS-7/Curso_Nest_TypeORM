import { Controller, Get } from '@nestjs/common';

@Controller('v1/courses')
export class CoursesController {
    @Get()
    findAll() {
        return "Listagem de cursos";
    }
}

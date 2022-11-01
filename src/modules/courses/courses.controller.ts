import { Controller, Get, Post, Patch,Delete, Param, Body,Res, HttpCode, HttpStatus } from '@nestjs/common';
import { CourseService } from '../../services/course/course.service';

@Controller('v1/courses')
export class CoursesController {
    constructor(private readonly cs: CourseService) {}
    @Get()
    findAll(@Res() res) {
        return res.status(200).send(this.cs.findAll());
    }

    @Get(':id')
    findOne(@Param('id') id:string, @Res() res) {
        return  res.status(200).send(this.cs.findOne(id));
    }

    @Post()
    @HttpCode(HttpStatus.NO_CONTENT)
    create(@Body('name') body) {
        return this.cs.create(body);
    }

    @Patch(':id')
    update(@Param('id') id:string, @Body('name') body, @Res() res) {
        return  res.status(200).send(this.cs.update(id, body));
    }

    @Delete(':id')
    remove(@Param('id') id:string, @Body('name') body,  @Res() res) {
        return  res.status(200).send(this.cs.delete(id));
    }

}

import { Controller, Get, Post, Patch,Delete, Param, Body,Res, HttpCode, HttpStatus } from '@nestjs/common';

@Controller('v1/courses')
export class CoursesController {
    @Get()
    findAll(@Res() response) {
        return response.status(200).send("Listagem de cursos");
    }

    @Get(':id')
    findOne(@Param('id') id:string, @Res() response) {
        return  response.status(200).send(`Curso #${id}`);
    }

    @Post()
    @HttpCode(HttpStatus.NO_CONTENT)
    create(@Body('name') body) {
        return body;
    }

    @Patch(':id')
    update(@Param('id') id:string, @Res() response) {
        return  response.status(200).send(`Curso #${id} Atualizado`);
    }

    @Delete(':id')
    remove(@Param('id') id:string, @Res() response) {
        return  response.status(200).send(`Curso #${id} Excluido`);
    }

}

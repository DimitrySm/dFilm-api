import { ApiTags } from "@nestjs/swagger";
import { FilmsService } from './films.service';
import { Controller, Get, Res, HttpStatus, Param, Req, Query } from '@nestjs/common';
import { Response } from 'express';
import { Film } from "./films.model";

@ApiTags('Films')
@Controller('films')
export class FilmsController {
  @Get()
  async getFilms(@Query() query): Promise<any> {

    const pageAsNumber = Number.parseInt(query.page)
    const sizeAsNumber = Number.parseInt(query.size)

    let page = 0
    if (!Number.isNaN(pageAsNumber) && pageAsNumber > 0) {
      page = pageAsNumber - 1
    }

    let size = 12
    if (!Number.isNaN(sizeAsNumber) && sizeAsNumber > 0 && sizeAsNumber < 12) {
      size = sizeAsNumber
    }

    const filmsCount = await Film.count()
    return {
      totalPages: Math.ceil(+filmsCount / size),
      films: await Film.findAll({limit: size, offset: size * page})
    }
  }
}

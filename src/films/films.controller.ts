import { ApiTags } from "@nestjs/swagger";
import { Controller, Get, Request, Query } from '@nestjs/common';
import { Film } from "./films.model";
import { FilmsService } from "./films.service";

export type GetFilmsResponseType = {
  totalPages: any,
  films: Film[]
}

export type GetFilmsQueryType = {
  page: string,
  size: string,
  search: string,
}

@ApiTags('Films')
@Controller('films')
export class FilmsController {
  constructor(private filmsService: FilmsService) { }

  @Get()
  async getFilms(@Query() query: GetFilmsQueryType): Promise<GetFilmsResponseType> {
    return await this.filmsService.getFilms(query)
  }

  @Get('/:id')
  async getFilmById(@Request() req): Promise<Film> {
    return await this.filmsService.getFilmById(req.params.id)
  }

  // @Get('/favourites/:userId')
  // async getFavouritesFilmsByUserId(@Request() req): Promise<any> {
  //   return await this.filmsService.getFavouritesFilmsByUserId(req.params.userId)
  // }
}

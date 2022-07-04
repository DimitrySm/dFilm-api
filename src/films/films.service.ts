import { Injectable } from '@nestjs/common';
import { GetFilmsQueryType, GetFilmsResponseType } from './films.controller';
import { Film } from './films.model';

@Injectable()
export class FilmsService {
  async getFilmById(id: string) {
    return await Film.findOne({ where: { id }, include: { all: true } })
  }

  async getFilms(query: GetFilmsQueryType): Promise<GetFilmsResponseType> {

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

    let films = await Film.findAll({
      limit: size,
      offset: size * page,
    })

    if (query.search) {
      const filmsWithoutPagination = await Film.findAll();
      films = filmsWithoutPagination.filter(
        film => film.title.includes(query.search)
          || film.director.includes(query.search)
          || film.actors.includes(query.search)
      )
    }

    const filmsCount = await Film.count()

    return {
      totalPages: Math.ceil(+filmsCount / size),
      films
    }
  }
}

import { Injectable } from '@nestjs/common';
import { InjectModel } from "@nestjs/sequelize";
import { FilmModel } from './films.model';

@Injectable()
export class FilmsService {

    constructor(@InjectModel(FilmModel) private filmsRepository: typeof FilmModel) { }
}

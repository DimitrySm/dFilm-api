import { Injectable } from '@nestjs/common';
import { InjectModel } from "@nestjs/sequelize";
import { Film } from './films.model';

@Injectable()
export class FilmsService {

    constructor(@InjectModel(Film) private filmsRepository: typeof Film) { }
}

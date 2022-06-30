import { Injectable } from '@nestjs/common';
import { InjectModel } from "@nestjs/sequelize";
import { Favourites } from './favourites.model';

@Injectable()
export class FavouritesService {

    constructor(@InjectModel(Favourites) private favouritesRepository: typeof Favourites) { }
}

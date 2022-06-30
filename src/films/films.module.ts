import { Module } from '@nestjs/common';
import { FilmsController } from './films.controller';
import { FilmsService } from './films.service';
import { SequelizeModule } from "@nestjs/sequelize";
import { FilmModel } from "./films.model";
import { SeedFilms } from 'src/database/seeds/film.seed';
import { SeederModule } from 'nestjs-sequelize-seeder';

@Module({
    controllers: [FilmsController],
    providers: [FilmsService],
    imports: [
        SequelizeModule.forFeature([FilmModel]),
        SeederModule.forFeature([SeedFilms]),
    ],
    exports: [
        FilmsService,
    ]
})
export class FilmsModule { }

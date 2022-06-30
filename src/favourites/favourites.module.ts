import { Module } from '@nestjs/common';
import { FavouritesController } from './favourites.controller';
import { FavouritesService } from './favourites.service';
import { SequelizeModule } from "@nestjs/sequelize";
import { Favourites } from "./favourites.model";

@Module({
    controllers: [FavouritesController],
    providers: [FavouritesService],
    imports: [
        SequelizeModule.forFeature([Favourites]),
    ],
    exports: [
        FavouritesService,
    ]
})
export class FavouritesModule { }

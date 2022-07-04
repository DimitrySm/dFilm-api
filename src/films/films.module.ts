import { Module } from '@nestjs/common';
import { FilmsController } from './films.controller';
import { FilmsService } from './films.service';
import { SequelizeModule } from "@nestjs/sequelize";
import { Film } from "./films.model";

@Module({
    imports: [
        SequelizeModule.forFeature([Film]),
    ],
    controllers: [FilmsController],
    providers: [FilmsService],
    exports: [
        FilmsService,
    ]
})
export class FilmsModule {}

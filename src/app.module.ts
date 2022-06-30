import { Module } from "@nestjs/common";
import { SequelizeModule } from "@nestjs/sequelize";
import { UsersModule } from './users/users.module';
import { ConfigModule } from "@nestjs/config";
import { User } from "./users/users.model";
import { AuthModule } from './auth/auth.module';
import { ServeStaticModule } from "@nestjs/serve-static";
import * as path from 'path';
import { FilmsModule } from "./films/films.module";
import { FavouritesModule } from "./favourites/favourites.module";
import { SeederModule } from 'nestjs-sequelize-seeder';

@Module({
    imports: [
        SequelizeModule.forRoot({
            dialect: 'postgres',
            host: process.env.POSTGRES_HOST,
            port: Number(process.env.POSTGRESS_PORT),
            username: process.env.POSTGRES_USER,
            password: process.env.POSTGRESS_PASSWORD,
            database: process.env.POSTGRES_DB,
            models: [User],
            autoLoadModels: true
        }),
        SeederModule.forRoot({
            runOnlyIfTableIsEmpty: true,
            foreignDelay: 2000, // 2 seconds
        }),
        UsersModule,
        AuthModule,
        FilmsModule,
        FavouritesModule,
    ]
})
export class AppModule { }

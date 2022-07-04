import { Module } from "@nestjs/common";
import { SequelizeModule } from "@nestjs/sequelize";
import { UsersModule } from './users/users.module';
import { User } from "./users/users.model";
import { AuthModule } from './auth/auth.module';
import { FilmsModule } from "./films/films.module";
import { SeederModule } from 'nestjs-sequelize-seeder';
import { Film } from "./films/films.model";

@Module({
    imports: [
        SequelizeModule.forRoot({
            dialect: 'postgres',
            host: process.env.POSTGRES_HOST,
            port: Number(process.env.POSTGRESS_PORT),
            username: process.env.POSTGRES_USER,
            password: process.env.POSTGRESS_PASSWORD,
            database: process.env.POSTGRES_DB,
            models: [User, Film],
            autoLoadModels: true
        }),
        SeederModule.forRoot({
            runOnlyIfTableIsEmpty: true,
        }),
        UsersModule,
        AuthModule,
        FilmsModule,
    ]
})
export class AppModule { }

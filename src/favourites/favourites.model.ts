import { BelongsTo, Column, DataType, ForeignKey, Model, Table } from "sequelize-typescript";
import { FilmModel } from "src/films/films.model";
import { User } from "src/users/users.model";

@Table({ tableName: 'favourites' })
export class Favourites extends Model<Favourites> {
    @Column({ type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true })
    id: number;

    @ForeignKey(() => User)
    @Column({type: DataType.INTEGER})
    userId: number;

    @ForeignKey(() => FilmModel)
    @Column({type: DataType.INTEGER})
    filmId: number;

}
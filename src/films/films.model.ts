import { Column, DataType, Model, Table } from "sequelize-typescript";

@Table({ tableName: 'films' })
export class FilmModel extends Model<FilmModel> {
    @Column({ type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true })
    id: number;

    @Column({ type: DataType.STRING, allowNull: false })
    title: string;

    @Column({ type: DataType.STRING, allowNull: false })
    year: string;

    @Column({ type: DataType.STRING, allowNull: false })
    runtime: string;

    @Column({ type: DataType.ARRAY(DataType.STRING), allowNull: false })
    genres: string[];

    @Column({ type: DataType.STRING, allowNull: false })
    director: string;

    @Column({ type: DataType.STRING, allowNull: false })
    actors: string;

    @Column({ type: DataType.STRING, allowNull: false })
    plot: string;

    @Column({ type: DataType.STRING, allowNull: false })
    posterUrl: string;
}
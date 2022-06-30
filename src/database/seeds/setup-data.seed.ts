import { Film } from 'src/films/films.model';
import { Connection, getManager } from 'typeorm';
import { Factory, Seeder } from 'typeorm-seeding';
import { filmsData } from '../data/films.data';

export class SetupData implements Seeder {
  public async run(factory: Factory, connection: Connection): Promise<void> {
    console.log('filmsData', filmsData);
    await getManager().query('TRUNCATE films');

    for (let i = 0; i < filmsData.length; i++) {
      const { title, year, runtime, genres, director, actors, plot, posterUrl } = filmsData[i];

      const film = new Film();
      film.title = title;
      film.year = year;
      film.runtime = runtime;
      film.genres = genres;
      film.director = director;
      film.actors = actors;
      film.plot = plot;
      film.posterUrl = posterUrl;
      await film.save();
    }
  }
}

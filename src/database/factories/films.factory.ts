import { Film } from 'src/films/films.model';
import { define } from 'typeorm-seeding';

define(Film, () => {
  const film = new Film();
  return film;
});

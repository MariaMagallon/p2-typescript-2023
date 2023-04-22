import { apiKey } from "./constants.js";
export class Film {
  constructor(
    public id: number,
    public title: string,
    public release_date: string,
    public poster_path: string,
    public overview: string,
    public director: string,
    //public genres: Array<genre>,
    public vote_average: number,
  ) {}

  getImg(): string {
    return `https://image.tmdb.org/t/p/w500${this.poster_path}`;
  }

}

export interface genre {
  id: string,
  name: string,
}

//per obtenir el director = aquest endpoint torna un array Crew de diferents professions s'ha de filtrar pel job (property) que sigui igual a la de director  
async function getDirector(filmId: number, apiKey: string): Promise<string> {
  const response = await fetch(
    `https://api.themoviedb.org/3/movie/${filmId}/credits?api_key=${apiKey}`
  );
  const { crew }: any = await response.json();
  const director = crew.find((result: any) => result.job === 'Director');
  return director ? director.name : 'Director not found';
}

//per obtenir un llistat de pelicules populars
export const loadFilms = async (page: number, films: Array<Film> ) => {
  const response = await fetch(
    `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&page=${page}`
  );
  const data: any = await response.json();
  if (data.results.length !== 0) {
    for (const {
      id,
      title,
      release_date,
      poster_path,
      overview,
      vote_average
    } of data.results as any[]) {
      const director = await getDirector(id, apiKey);
      const film = new Film(id, title, release_date, poster_path, overview, director, vote_average);
      if(film.poster_path !== null){
        films.push(film);
      }
      
    }
  } else {
    console.error(
      `Error fetching data`
    );
  }
  return films;
};

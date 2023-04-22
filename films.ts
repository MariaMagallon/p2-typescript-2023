import { apiKey } from "./constants.js";
export class Film {
  constructor(
    public id: number,
    public title: string,
    public release_date: string,
    public poster_path: string,
    public overview: string,
    public popularity: string,
    public vote_average: number,
  ) {}

  getImg(): string {
    return `https://image.tmdb.org/t/p/w500${this.poster_path}`;
  }
}

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
      popularity,
      vote_average
    } of data.results as any[]) {
      const film = new Film(id, title, release_date, poster_path, overview, popularity, vote_average);
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

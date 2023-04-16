import { apiKey } from "./constants.js";
export class Film {
  constructor(
    public id: number,
    public title: string,
    public release_date: string,
    public backdrop_path: string,
    public overview: string,
    public popularity: string
  ) {}

  getImg(): string {
    return `https://image.tmdb.org/t/p/w500${this.backdrop_path}`;
  }
}

export const loadFilms = async () => {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&page=1`
    );
    const { results } = (await response.json()) as { results: any[] };
    const films: Array<Film> = [];
    for (const {
      id,
      title,
      release_date,
      backdrop_path,
      overview,
      popularity,
    } of results) {
      films.push(
        new Film(id, title, release_date, backdrop_path, overview, popularity)
      );
    }
    return films;
  };
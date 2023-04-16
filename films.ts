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

export const loadFilms = async (page: number) => {
  const response = await fetch(
    `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&page=${page+1}`
  );
  const data: any = await response.json();
  const films: Array<Film> = [];
  if (data.results.length !== 0) {
    for (const {
      id,
      title,
      release_date,
      backdrop_path,
      overview,
      popularity,
    } of data.results as any[]) {
      films.push(
        new Film(id, title, release_date, backdrop_path, overview, popularity)
      );
    }
    const currentPage = data.page;
  } else {
    console.error(
      `Error fetching data`
    );
  }
  return films;
};

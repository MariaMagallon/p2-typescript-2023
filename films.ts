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

export const loadFilms = async (url: string) => {
  const response = await fetch(
    url
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
    const prev = document.getElementById('prev');
    const next = document.getElementById('next');
    const current = document.getElementById('current');
    var currentPage = 1;
    var nextPage = 2;
    var prevPage = 3;
    var lastUrl = '';
    var totalPages = 4;
    currentPage = data.page;
    nextPage = currentPage + 1;
    prevPage = currentPage - 1;
    totalPages = data.total_pages;
    if(currentPage <= 1){
        prev.classList.add('disabled');
        next.classList.remove('disabled')
      }else if(currentPage>= totalPages){
        prev.classList.remove('disabled');
        next.classList.add('disabled')
      }else{
        prev.classList.remove('disabled');
        next.classList.remove('disabled')
      }
  } else {
    console.error(
      `Error fetching data`
    );
  }
  return films;
};

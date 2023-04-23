import { mkdir, writeFile } from "fs/promises";
import { render } from "./render.js";
import { Film, loadFilms } from "./films.js";
import { renderFilmPage } from "./renderFilm.js";

await mkdir('films').catch(console.error);

let films: Array<Film> = [];
films = await loadFilms(1, films);
films = await loadFilms(2, films);
films = await loadFilms(3, films);

const filmDetail = async (films: Array<Film>) => {
  for (const film of films) {
    const htmlPage = renderFilmPage(film);
    const htmlName: String = film.title;
    await writeFile(`films/${htmlName}.html`, htmlPage);
  }
};
await filmDetail(films);
const html = render(films);
await writeFile("films.html", html);
  
//display 3 peticions per tenir 60 resultats (20 x page)

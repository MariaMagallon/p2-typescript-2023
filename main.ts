import { mkdir, writeFile } from "fs/promises";
import { render } from "./render.js";
import { Film, loadFilms } from "./films.js";
import { renderFilmPage } from "./renderFilm.js";

export let currentPage: number = 1; 

await mkdir('films').catch(console.error);

export const loadPage = async () => {
  
  let films: Array<Film> = [];
  films = await loadFilms(1, films);
  films = await loadFilms(2, films);
  films = await loadFilms(3, films);

  const filmDetail = async (films: Array<Film>) => {
    for (const film of films) {
      const html_page = await renderFilmPage(film);
      const html_name: String = film.title;
      await writeFile(`films/${html_name}.html`, html_page);
    }
  };
  await filmDetail(films);
  const html = render(films);
  await writeFile("films.html", await html);
  
}

await loadPage();
//display 3 peticions per tenir 60 resultats

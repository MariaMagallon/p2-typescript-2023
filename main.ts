import { writeFile } from "fs/promises";
import { render } from "./render.js";
import { Film, loadFilms } from "./films.js";
import { renderFilmPage } from "./renderFilm.js";

const films = await loadFilms(1);
const filmDetail = async (films: Array<Film>) => {
  for (const film of films) {
    const html_page = renderFilmPage(film);

    const html_name: String = film.title;

    await writeFile(`${html_name}.html`, await html_page);
  }
};
filmDetail(films);
const html = render(films);
await writeFile("films.html", await html);
//display load more button 1 cop

import { writeFile } from "fs/promises";
import { render } from "./render.js";
import { loadFilms } from "./films.js";

const films = await loadFilms(0);
const html = render(films);
await writeFile('films.html', await html);
//display load more button 1 cop
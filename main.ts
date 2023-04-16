import { writeFile } from "fs/promises";
import { render } from "./render.js";
import { loadFilms } from "./films.js";

const films = await loadFilms();
const html = render(films);
await writeFile('films.html', html);
import { writeFile } from "fs/promises";
import { render } from "./render.js";
import { loadFilms } from "./films.js";
import { apiUrl } from "./constants.js";
const films = await loadFilms(apiUrl);
const html = render(films);
await writeFile('films.html', await html);

//intento de pagination fallido porque no tengo acceso a elementos que aun no estan creados con html por lo que no puedo adjudicar eventos nuevos
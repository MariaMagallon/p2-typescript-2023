import { Film } from "./films.js";
import { loadFilms } from "./films.js";

const head = (title: string) => `
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="styles.css">
  <title>${title}</title>
</head>`;

const renderFilms = (films: Array<Film>) => {
  let html = "";
  for (const film of films) {
    html += `<div class="film">
      <img src="${film.getImg()}" />
      <div class="data">
        <div class="name">${film.title}</div>
      </div>
    </div>`;
  }
  return html;
};

//La api solo devuelve 20 resultados por pagina. Solución rapida duplicar llamada
export const render = async (films: Array<Film>) => {
  return `
<html lang="en">
  ${head("Film List")}
  <body>
    ${renderFilms(films)}
    ${renderFilms(await loadFilms(1))}
  </body>
</html>`;
};

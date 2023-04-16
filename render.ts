import { Film } from "./films.js";

const head = (title: string) => `
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${title}</title>
  <style>
    body {
      margin: 0;
      padding: 0;
    }
    .film {
      font-family: sans-serif;
      display: flex;
      flex-direction: row;
      align-items: center;
      padding: .4rem;
      border-bottom: 1px solid #ddd;
    }
    .film img {
      width: 3rem;
      height: 3rem;
      border-radius: 50%;
      margin-right: 0.7rem;
    }
    .film .name {
      font-weight: bold;
    }
  </style>
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
}

export const render = (films: Array<Film>) => {
  return `
<html>
  ${head("Film List")}
  <body>
    ${renderFilms(films)}
  </body>
</html>`;
};

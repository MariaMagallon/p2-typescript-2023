import { Film } from "./films.js";

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
    html += `
    <a href="films/${film.title}.html">
    <div class="film">
      <img src="${film.getImg()}" alt="${film.title}" />
      <div class="film-info">
        <h3>${film.title}</h3>
        <span class="${getColor(film.vote_average)}">${film.vote_average}</span>
      </div>
    </div>
    </a>`;
  }
  return html;
};

function getColor(vote: number) {
  if(vote>= 8){
      return 'green'
  }else if(vote >= 5){
      return "orange"
  }else{
      return 'red'
  }
}

export const render = async (films: Array<Film>) => {
  return `
    <html lang="en">
      ${head("Film List")}
      <body>
        <main id="main">
          ${renderFilms(films)}
        <main>
      </body>
    </html>`;
};
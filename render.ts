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
  let html: string = "";
  for (const film of films) {
    html += `
      <a href="films/${film.title}.html">
        <div class="film">
          <img src="${film.getPoster()}" alt="${film.title}" />
          <div class="film-info">
            <h3>${film.title}</h3>
            <span class="${getColor(film.vote_average)}">${film.vote_average}</span>
          </div>
          <div class="details">
            <div class="row">
              <h3>Release Date: </h3>
              ${getDate(film.release_date)}
            </div>
            <div class="row">
              <h3>Directed By: </h3>
              <h3 class="field">${film.director}</h3>
            </div>
            <div class="more">
              <span class="more_t">Click on the card for more</span>
            </div>
          </div>
        </div>
      </a>`;
  }
  return html;
};

function getColor( vote: number ) {
  if(vote>= 8){
      return 'green';
  }else if(vote >= 5){
      return "orange";
  }else{
      return 'red';
  }
}

//evitar nulls
function getDate ( date: string ) {
  let html: string = "";
  date ? html += `<h3 class="field"> ${date}</h3>` : html += `<h3 class="field"> Coming Soon</h3>`;
  return html;
}

export const render = (films: Array<Film>) => {
  return `
  <html lang="en">
    ${head("Film List")}
    <body>
      <main>
        <section class="row2">
          <h1 class="title">The most popular movies of</h1>
          <img class="title-img" src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_short-8e7b30f73a4020692ccca9c88bafe5dcb6f8a62a4c6bc55cd9ba82bb2cd95f6c.svg" alt="TMBDB" />
        </section>
        <section class="grid">
          ${renderFilms(films)}
        </section>
      <main>
    </body>
  </html>`;
};
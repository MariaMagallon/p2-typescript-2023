import { Film, Genre } from "./films.js";

const head = (title: string) => `
  <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="../styles.css">
    <title>${title}</title>
  </head>`;

export const renderFilmPage = (film: Film) => { 
  return `
  <html lang="en">
    ${head("Film Detail")}
    <body>
      <main>
        <section class="img_details" style="background-image: url(${film.getImg()});">
          <h1 class="title_details">${film.title}</h1>
          <div class="back"><a href="../films.html">Go Back</a></div>
          <div class="row">
            <p class="title_h32">Directed By: </p>
            <p class="title_h32_field">${film.director}</p>
          </div>
          <div class="row">
            <p class="title_h32">Release Date: </p>
            ${getDate(film.release_date)}
          </div>
          <p class="title_h3">Overview</p>
          <p class="overview">${film.overview}</p>
          <div id="ul-genres">
            <ul>
              ${getGenres(film.genres)}
            </ul>
          </div>
        </section>
      </main>
    </body>
  </html>`;
};

//avoid null dates
function getDate(date: string) {
  let html = "";
  if (date === undefined) {
    html += `<p class="title_h32_field"> Comming Soon</p>`;
  } else {
    html += `<p class="title_h32_field"> ${date}</p>`;
  }
  return html;
}

function getGenres(genres: Array<Genre>) {
  let html = "";
  genres.forEach((genre) => {
    html += `<li class="genre">${genre.name}</li>`;
  });
  return html;
}

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
  //evitar nulls
  const result: string = film.getImg();
  const urlImg: string = film.backdrop_path ? result : "../assets/placeholder.png";
  return `
  <html lang="en">
    ${head("Film Detail")}
    <body>
      <main>
        <section class="img_details" style="background-image: url(${urlImg});">
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

//evitar nulls
function getDate(date: string) {
  let html: string = "";
  date ? html += `<p class="title_h32_field"> ${date}</p>` : html += `<p class="title_h32_field"> Coming Soon</p>`;
  return html;
}

//obtenir el llistat de generes de cada pel.licula
function getGenres(genres: Array<Genre>) {
  let html: string = "";
  genres.forEach((genre) => {
    html += `<li class="genre">${genre.name}</li>`;
  });
  return html;
}

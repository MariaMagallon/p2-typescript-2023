import { Film, loadFilms } from "./films.js";

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

export const render = async (films: Array<Film>) => {
  return `
    <html lang="en">
      ${head("Film List")}
      <body>
        <div class="pagination">
        <button onclick="myFunction()">Load More</button>    
        </div>
        ${renderFilms(films)}
        <div id="content" style="display: none">
          ${renderFilms(await loadFilms(+1))}
        <div>
      </body>
      <script>
        function myFunction() {
          document.getElementById("content").style.display = "block";
        }
      </script>
    </html>`;
};

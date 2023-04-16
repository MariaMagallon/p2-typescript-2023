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
    ${renderFilms(films)}
    <div class="pagination">
        <div class="page" id="prev">Previous Page</div>
        <div class="current" id="current">1</div>
        <div class="page" id="next">Next Page</div>
    </div>
    <script>
        const prev = document.getElementById('prev');
        const next = document.getElementById('next');
        const current = document.getElementById('current');
        var currentPage = 1;
        var nextPage = 2;
        var prevPage = 3;
        var lastUrl = '';
        var totalPages = 4;
        prev.addEventListener('click', () => {
            if(prevPage > 0){
              pageCall(prevPage);
            }
          })
          
        next.addEventListener('click', () => {
        if(nextPage <= totalPages){
            pageCall(nextPage);
        }
        })
        function pageCall(page){
            let urlSplit = lastUrl.split('?');
            let queryParams = urlSplit[1].split('&');
            let key = queryParams[queryParams.length -1].split('=');
            if(key[0] != 'page'){
                let url = lastUrl + '&page='+page;
                ${renderFilms(await loadFilms(url))}
            }else{
                key[1] = page.toString();
                let a = key.join('=');
                queryParams[queryParams.length -1] = a;
                let b = queryParams.join('&');
                let url = urlSplit[0] +'?'+ b
                ${renderFilms(await loadFilms(url))}
            }
        }
    </script>
  </body>
</html>`;
};

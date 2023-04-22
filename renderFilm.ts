import { Film } from "./films.js";

const head = (title: string) => `
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="styles.css">
  <title>${title}</title>
</head>`;

export const renderFilmPage = (film: Film) => {
  const { id, title, release_date, poster_path, overview, popularity } = film;
  return `
  <html lang="en">
    ${head("Film Detail")}
    <body>
      <div>Name:${title}</div>
    </body>
  </html>`;
};

const html = require("html");

module.exports = (cat) =>
  `<!DOCTYPE html>
  <html>
  <head>
  <link rel='stylesheet' href='/public/styles.css'/>

  </head>
  <body>
    <div class="cat-list">
     <header><a href = '/cats'>HOME</a></header>
        <div class='cat-item'>
          <p>
           <span class="cat-breed">${cat.breed} </span>
           <div><img class="cat-image" src="${cat.image}">
          </p>
          <p class = 'cat-fact'>${cat.fact}</p>
        </div>
    </div>
  </body>
  </html>`;

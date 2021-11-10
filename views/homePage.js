const html = require("html");

module.exports = (cats) =>
  `<!DOCTYPE html>
  <html>
  <head>
    <title>Cat Breeds</title>
    <link rel='stylesheet' href='/public/styles.css'/>
  </head>
  <body>
    <div class="cat-list">
      <header>BREED OF CATS</header>
      <div><img class="cat-logo" src="public/logo.jpg">
      ${cats
        .map(
          (cat) => `
        <div class='cat-item'>
          <p>
          <a href='/cats/${cat.id}'><span class="cat-id">${cat.id}. </span>${cat.breed}
          </p>
        </div>`
        )
        .join("")}
    </div>
  </body>
</html>`;

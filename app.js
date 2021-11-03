const express = require("express");
const app = express();
const morgan = require("morgan");
const path = require("path");
const data = require("./data");

app.use(morgan("dev"));
app.use("/public", express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
  const cats = data.list();
  const html = `<!DOCTYPE html>
  <html>
  <head>
    <title>Cat Breeds</title>
    <link rel='stylesheet' href='/public/styles.css'/>
  </head>
  <body>
    <div class="news-list">
      <header><img src="/logo.png"/>BREED OF CATS</header>
      ${cats
        .map(
          (cat) => `
        <div class='news-item'>
          <p>
          <a href='/cats/${cat.id}'><span class="news-position">${cat.id}. </span>${cat.breed}
          </p>
        </div>`
        )
        .join("")}
    </div>
  </body>
</html>`;
  res.send(html);
});

app.get("/cats/:id", (req, res) => {
  const id = req.params.id;
  const cat = data.find(id);
  res.send(
    `<!DOCTYPE html>
    <html>
    <head>

    <link rel='stylesheet' href='/public/styles.css'/>

    </head>
    <body>
      <div class="news-list">
      <a href='/'> <header>HOME</header>
          <div class='news-item'>
            <p>
             <span class="news-position">${cat.breed} </span>
             <div><img class="cat-image" src="${cat.image}">
            </p>
            <p>${cat.fact}</p>
          </div>
      </div>
    </body>
    </html>`
  );
});

const PORT = 1337;
app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});

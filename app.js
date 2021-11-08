const express = require("express");
const app = express();
const morgan = require("morgan");
const path = require("path");
const data = require("./data");

app.use(morgan("dev"));
app.use(express.urlencoded({ extended: false }));
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
      <div class="cat-list">
       <header><a href = '/'>HOME</a></header>
          <div class='cat-item'>
            <p>
             <span class="cat-breed">${cat.breed} </span>
             <div><img class="cat-image" src="${cat.image}">
            </p>
            <p class = 'cat-fact'>${cat.fact}</p>
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

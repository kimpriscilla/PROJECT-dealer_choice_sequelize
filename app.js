const express = require("express");
const app = express();
const morgan = require("morgan");
const path = require("path");

const books = ["Cat 1", "Cat 2", "Cat 3"];

app.use(morgan("dev"));
app.use("/public", express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
  res.send(`<html>
  <head>
  <link rel='stylesheet' href='/public/styles.css'/>
  </head>
    <body>
      <h1>Breeds of Cats</h1>
      <nav>
      ${books
        .map((book, idx) => {
          return `
          <a href ='/details/${idx}'>${book}</a>
        `;
        })
        .join("")}
      </nav>
    </body>
  </html>`);
});

app.get("/details/:id", (req, res) => {
  const book = books[req.params.id];
  res.send(
    `  <html>
      <head></head>
      <body>
      <a href = '/'> All Books </a>
        <h1>Details for ${book}</h1>
      </body>
    </html>`
  );
});

const PORT = 1337;
app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});

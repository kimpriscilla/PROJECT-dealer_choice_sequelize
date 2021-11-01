const express = require("express");
const app = express();

const books = ["Book 1", "Book 2", "Book 3"];

app.get("/", (req, res) => {
  res.send(`<html>
    <head>
    </head>
      <body>
        <h1>Self-Help Books</h1>
        <ul>
        ${books
          .map((book, idx) => {
            return `<li>
            <a href ='/details/${idx}'>${book}</a>
          </li>`;
          })
          .join("")}
        </ul>
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

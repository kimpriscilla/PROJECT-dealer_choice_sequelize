const express = require("express");
const app = express();
const morgan = require("morgan");
const path = require("path");
const data = require("./data");
const homePage = require("./views/homePage");
const detailsPage = require("./views/detailsPage");

app.use(morgan("dev"));
app.use(express.urlencoded({ extended: false }));
app.use("/public", express.static(path.join(__dirname, "public")));

const routes = require("./routes/posts");

app.use("/posts", routes);

// app.get("/cats/:id", (req, res) => {
//   const id = req.params.id;
//   const cat = data.find(id);
//   res.send(
//     `<!DOCTYPE html>
//     <html>
//     <head>

//     <link rel='stylesheet' href='/public/styles.css'/>

//     </head>
//     <body>
//       <div class="cat-list">
//        <header><a href = '/'>HOME</a></header>
//           <div class='cat-item'>
//             <p>
//              <span class="cat-breed">${cat.breed} </span>
//              <div><img class="cat-image" src="${cat.image}">
//             </p>
//             <p class = 'cat-fact'>${cat.fact}</p>
//           </div>
//       </div>
//     </body>
//     </html>`
//   );
// });

const PORT = 1337;
app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});

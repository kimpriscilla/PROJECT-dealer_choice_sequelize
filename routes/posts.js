const {
  syncAndSeed,
  models: { Cat, Owner },
} = require("../db");

const express = require("express");
const router = express.Router();

router.get("/", async (req, res, next) => {
  try {
    const cats = await Promise.all([Cat.findAll()]);
    res.send(
      `
  <html>
  <head>
    <title>Cat Breeds</title>
     <link rel='stylesheet' href='/public/styles.css'/>
  </head>
  <body>
    <div class="cat-list">
      <header>BREED OF CATS</header>
      <div>
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
</html>`
    );
  } catch (error) {
    next(error);
  }
});

router.get("/:id", async (req, res, next) => {
  try {
    const cat = await Promise.all([
      Cat.findAll({
        // where: { id: req.params.id },
        // include: [Owner],
      }),
    ]);

    console.log("this is our cat!!!!", cat.dataValues);
    // res.send(`
    // <html>
    // <head>
    // <link rel='stylesheet' href='/public/styles.css'/>

    // </head>
    // <body>
    //   <div class="cat-list">
    //    <header><a href = '/cats'>HOME</a></header>
    //    <div>Cat Mom:
    //    ${cat.dataValues.ownerId}</div>
    //       <div class='cat-item'>
    //         <p>
    //          <span id"cat-breed"><div>Breed:</div>${cat.breed} </span>

    //         </p>
    //         <p id = 'cat-fact'><div>Fact:</div>${cat.fact}</p>

    //       </div>
    //   </div>
    // </body>
    // </html>`);
  } catch (error) {
    next(error);
  }
});

module.exports = router;

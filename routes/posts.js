const express = require("express");
const router = express.Router();
const client = require("../db");
const homePage = require("../views/homePage");
const detailsPage = require("../views/detailsPage");

router.get("/", async (req, res, next) => {
  try {
    const data = await client.query(
      `
      SELECT cats.id, cats.breed FROM cats
      `
    );
    const cats = data.rows;
    res.send(homePage(cats));
  } catch (error) {
    next(error);
  }
});

router.get("/:id", async (req, res, next) => {
  try {
    const data = await client.query(
      `SELECT * FROM cats
      JOIN contents
      ON (cats.id = contents.catId)
      WHERE catId = $1

    `,
      [req.params.id]
    );
    const post = data.rows[0];
    console.log(data);
    res.send(detailsPage(post));
  } catch (error) {
    next(error);
  }
});

module.exports = router;

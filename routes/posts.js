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

module.exports = router;

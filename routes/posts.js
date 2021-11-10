const express = require("express");
const router = express.Router();
const client = require("../db");
const homePage = require("../views/homePage");
const detailsPage = require("../views/detailsPage");

router.get("/", async (req, res, next) => {
  try {
    const data = await client.query(
      `
      SELECT * FROM cats
      `
    );
    res.send(homePage(data.rows));
  } catch (error) {
    next(error);
  }
});

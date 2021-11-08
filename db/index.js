const pg = require("pg");
const client = new pg.Client("postgres://localhost/dealer_choice_db");

client.connect();

module.exports = client;

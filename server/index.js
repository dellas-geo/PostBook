const express = require("express");
const app = express();

const db = require("./db/models");

db.sequelize.sync().then(() => {
  app.listen(3001, () => {
    console.log("Server is up and running");
  });
});

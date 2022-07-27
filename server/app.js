const express = require("express");
const app = express();

const morgan = require("morgan");
const Routes = require("./src/routes/routes");

app.use(express.json());
app.use(morgan("dev"));

//Routes
app.use(Routes);

module.exports = {
  app,
};

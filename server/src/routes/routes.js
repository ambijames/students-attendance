const express = require("express");
const {
  createStudent,
  getMessage,
  getStudent,
} = require("../controller/createStudent");

const Routes = express.Router();

Routes.get("/", getMessage);

Routes.post("/createStudent", createStudent);
// Routes.post("/student", getStudent);

module.exports = Routes;

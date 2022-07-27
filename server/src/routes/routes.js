const express = require("express");
const { createStudent } = require("../controller/createStudent");

const Routes = express.Router();

Routes.post("/createStudent", createStudent);
module.exports = Routes;

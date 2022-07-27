const express = require("express");
const { createStudent, getMessage } = require("../controller/createStudent");

const Routes = express.Router();

Routes.get("/", getMessage);

Routes.post("/createStudent", createStudent);

module.exports = Routes;

const express = require("express");
const {
  createAcademicYear,
} = require("../controllers/academics/academicYear.controller");
const isAdmin = require("../middleware/isAdmin");
const isLogin = require("../middleware/isLogin");

const academicYearRouter = express.Router();

academicYearRouter.post("/", isLogin, isAdmin, createAcademicYear);

module.exports = academicYearRouter;

const express = require("express");
const {
  createAcademicYear,
  getAcademicYears,
} = require("../controllers/academics/academicYear.controller");
const isAdmin = require("../middleware/isAdmin");
const isLogin = require("../middleware/isLogin");

const academicYearRouter = express.Router();

academicYearRouter.post("/", isLogin, isAdmin, createAcademicYear);

academicYearRouter.get("/", getAcademicYears);

module.exports = academicYearRouter;

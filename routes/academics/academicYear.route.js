const express = require("express");
const {
  createAcademicYear,
  getAcademicYears,
  getAcademicYear,
  updateAcademicYear,
  deleteAcademicYear,
} = require("../../controllers/academics/academicsYear.controller");
const isAdmin = require("../../middleware/isAdmin");
const isLogin = require("../../middleware/isLogin");

const academicYearRouter = express.Router();

academicYearRouter.post("/", isLogin, isAdmin, createAcademicYear);

academicYearRouter.get("/", isLogin, isAdmin, getAcademicYears);

academicYearRouter.get("/:id", isLogin, isAdmin, getAcademicYear);

academicYearRouter.put("/:id", isLogin, isAdmin, updateAcademicYear);

academicYearRouter.delete("/:id", isLogin, isAdmin, deleteAcademicYear);

module.exports = academicYearRouter;

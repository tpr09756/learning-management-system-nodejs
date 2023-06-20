const express = require("express");
const {
  createProgram,
  getPrograms,
  getProgram,
  updateProgram,
  deleteProgram,
} = require("../../controllers/academics/programs.controller");
const isAdmin = require("../../middleware/isAdmin");
const isLogin = require("../../middleware/isLogin");

const programRouter = express.Router();

/* 
academicYearRouter.post("/", isLogin, isAdmin, createAcademicYear);

academicYearRouter.get("/", isLogin, isAdmin, getAcademicYears);
 */
// Routes chaining
programRouter
  .route("/")
  .post(isLogin, isAdmin, createProgram)
  .get(isLogin, isAdmin, getPrograms);

//academicYearRouter.get("/:id", isLogin, isAdmin, getAcademicYear);
//academicYearRouter.put("/:id", isLogin, isAdmin, updateAcademicYear);
//academicYearRouter.delete("/:id", isLogin, isAdmin, deleteAcademicYear);

programRouter
  .route("/:id")
  .get(isLogin, isAdmin, getProgram)
  .put(isLogin, isAdmin, updateProgram)
  .delete(isLogin, isAdmin, deleteProgram);

module.exports = programRouter;

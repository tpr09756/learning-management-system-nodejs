const express = require("express");
const {
  createClassLevels,
  getClassLevels,
  getClassLevel,
  updateClassLevel,
  deleteClassLevel,
} = require("../../controllers/academics/classLevel.controller");
const isAdmin = require("../../middleware/isAdmin");
const isLogin = require("../../middleware/isLogin");

const classLevelRouter = express.Router();

/* 
academicYearRouter.post("/", isLogin, isAdmin, createAcademicYear);

academicYearRouter.get("/", isLogin, isAdmin, getAcademicYears);
 */
// Routes chaining
classLevelRouter
  .route("/")
  .post(isLogin, isAdmin, createClassLevels)
  .get(isLogin, isAdmin, getClassLevels);

//academicYearRouter.get("/:id", isLogin, isAdmin, getAcademicYear);
//academicYearRouter.put("/:id", isLogin, isAdmin, updateAcademicYear);
//academicYearRouter.delete("/:id", isLogin, isAdmin, deleteAcademicYear);

academicTermRouter
  .route("/:id")
  .get(isLogin, isAdmin, getClassLevel)
  .put(isLogin, isAdmin, updateClassLevel)
  .delete(isLogin, isAdmin, deleteClassLevel);

module.exports = academicTermRouter;

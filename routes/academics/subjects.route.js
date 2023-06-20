const express = require("express");
const {
  createSubject,
  getSubjects,
  getSubject,
  updateSubject,
  deleteSubject,
} = require("../../controllers/academics/subjects.controller");
const isAdmin = require("../../middleware/isAdmin");
const isLogin = require("../../middleware/isLogin");

const subjectRouter = express.Router();

subjectRouter.post("/:programID", isLogin, isAdmin, createSubject);

subjectRouter.get("/", isLogin, isAdmin, getPrograms);

subjectRouter.get("/:id", isLogin, isAdmin, getProgram);

subjectRouter.put("/:id", isLogin, isAdmin, updateProgram);

subjectRouter.delete("/:id", isLogin, isAdmin, deleteProgram);

module.exports = subjectRouter;

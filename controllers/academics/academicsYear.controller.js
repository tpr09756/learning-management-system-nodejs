const AsyncHandler = require("express-async-handler");
const AcademicYear = require("../model/Academic/AcademicYear");
const Admin = require("../model/Staff/Admin");

//@desc Create academic year
//@route POST /api/v1/academic-years
//@access Private
exports.createAcademicYear = AsyncHandler(async (req, res) => {
  const { name, fromYear, toYear } = req.body;

  // check if academic year exists
  const academicYear = await AcademicYear.findOne({
    name,
  });
  if (academicYear) {
    throw new Error("Academic year already exists");
  }
  const academicYearCreated = await AcademicYear.create({
    name,
    fromYear,
    toYear,
    createdBy: req.userAuth._id,
  });

  res.status(201).json({
    status: "success",
    message: "Academic year created successfully",
    data: academicYearCreated,
  });
});

//@desc Get all academic year
//@route GET /api/v1/academic-years
//@access Private
exports.getAcademicYears = AsyncHandler(async (req, res) => {
  const academicYears = await AcademicYear.find();

  res.status(201).json({
    status: "success",
    message: "Academic year fetched successfully",
    data: academicYears,
  });
});

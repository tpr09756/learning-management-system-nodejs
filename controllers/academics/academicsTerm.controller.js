const AsyncHandler = require("express-async-handler");
const AcademicTerm = require("../../model/Academic/AcademicTerm");
const Admin = require("../../model/Staff/Admin");

//@desc Create academic term
//@route POST /api/v1/academic-terms
//@access Private
exports.createAcademicTerm = AsyncHandler(async (req, res) => {
  const { name, description, duration } = req.body;

  // check if academic year exists
  const academicTerm = await AcademicTerm.findOne({
    name,
  });
  if (academicTerm) {
    throw new Error("Academic term already exists");
  }
  // create academic year

  const academicTermCreated = await AcademicTerm.create({
    name,
    description,
    duration,
    createdBy: req.userAuth._id,
  });

  // Associate academic year to admin
  const admin = await Admin.findById(req.userAuth._id);
  admin.academicTerms.push(academicTermCreated._id);
  await admin.save();

  res.status(201).json({
    status: "success",
    message: "Academic year created successfully",
    data: academicTermCreated,
  });
});

//@desc Get all academic terms
//@route GET /api/v1/academic-terms
//@access Private
exports.getAcademicTerms = AsyncHandler(async (req, res) => {
  const academicTerms = await AcademicTerm.find();

  res.status(201).json({
    status: "success",
    message: "Academic term fetched successfully",
    data: academicTerms,
  });
});

//@desc Get single academic term
//@route GET /api/v1/academic-terms/:id
//@access Private
exports.getAcademicTerm = AsyncHandler(async (req, res) => {
  const academicTerm = await AcademicTerm.findById(req.params.id);

  res.status(201).json({
    status: "success",
    message: "Academic terms fetched successfully",
    data: academicTerm,
  });
});

//@desc Update academic term
//@route PUT /api/v1/academic-terms/:id
//@access Private
exports.updateAcademicTerm = AsyncHandler(async (req, res) => {
  const { name, description, duration } = req.body;
  // check if name exists
  const createAcademicTermFound = await AcademicTerm.findOne({ name });
  if (createAcademicTermFound) {
    throw new Error("Academic term already exists");
  }
  const academicTerm = await AcademicTerm.findByIdAndUpdate(
    req.params.id,
    {
      name,
      description,
      duration,
      createdBy: req.userAuth._id,
    },
    {
      new: true,
    }
  );

  res.status(201).json({
    status: "success",
    message: "Academic term updated successfully",
    data: academicTerm,
  });
});

//@desc Delete academic term
//@route PUT /api/v1/academic-terms/:id
//@access Private
exports.deleteAcademicTerm = AsyncHandler(async (req, res) => {
  // check if name exists
  await AcademicTerm.findByIdAndDelete(req.params.id);

  res.status(201).json({
    status: "success",
    message: "Academic term deleted successfully",
  });
});

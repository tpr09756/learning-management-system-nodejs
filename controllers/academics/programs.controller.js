const AsyncHandler = require("express-async-handler");
const Admin = require("../../model/Staff/Admin");
const Program = require("../../model/Academics/Program");

//@desc Create program
//@route POST /api/v1/programs
//@access Private
exports.createProgram = AsyncHandler(async (req, res) => {
  const { name, description } = req.body;

  // check if academic year exists
  const programFound = await Program.findOne({
    name,
  });
  if (programFound) {
    throw new Error("Program already exists");
  }
  // create academic year

  const programCreated = await Program.create({
    name,
    description,
    createdBy: req.userAuth._id,
  });

  // Associate program to admin
  const admin = await Admin.findById(req.userAuth._id);
  admin.programs.push(programCreated._id);
  await admin.save();

  res.status(201).json({
    status: "success",
    message: "Program created successfully",
    data: programCreated,
  });
});

//@desc Get all programs
//@route GET /api/v1/programs
//@access Private
exports.getPrograms = AsyncHandler(async (req, res) => {
  const programs = await Program.find();

  res.status(201).json({
    status: "success",
    message: "Programs fetched successfully",
    data: programs,
  });
});

//@desc Get single program
//@route GET /api/v1/programs/:id
//@access Private
exports.getProgram = AsyncHandler(async (req, res) => {
  const program = await Program.findById(req.params.id);

  res.status(201).json({
    status: "success",
    message: "Program fetched successfully",
    data: program,
  });
});

//@desc Update program
//@route PUT /api/v1/programs/:id
//@access Private
exports.updateProgram = AsyncHandler(async (req, res) => {
  const { name, description } = req.body;
  // check if name exists
  const createProgramFound = await Program.findOne({ name });
  if (createProgramFound) {
    throw new Error("Program already exists");
  }
  const program = await Program.findByIdAndUpdate(
    req.params.id,
    {
      name,
      description,
      createdBy: req.userAuth._id,
    },
    {
      new: true,
    }
  );

  res.status(201).json({
    status: "success",
    message: "Program updated successfully",
    data: program,
  });
});

//@desc Delete Program
//@route PUT /api/v1/programs/:id
//@access Private
exports.deleteProgram = AsyncHandler(async (req, res) => {
  // check if name exists
  await Program.findByIdAndDelete(req.params.id);

  res.status(201).json({
    status: "success",
    message: "Program deleted successfully",
  });
});

const mongoose = require("mongoose");
const { db } = require("../model/Academic/ExamResults");

const dbConnect = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log("DB Connected successfully");
  } catch (error) {
    console.log("DB Connected failed", error.message);
  }
};

dbConnect();

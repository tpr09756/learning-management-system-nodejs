const bcrypt = require("bcryptjs");

const mongoose = require("mongoose");
const adminSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      default: "admin",
    },
  },
  {
    timestamps: true,
  }
);
//Hash password
adminSchema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    next();
  }
  //salt
  const salt = await bcrypt.genSalt(10);
  const hash = await bcrypt.hash(this.password, salt);
  this.password = hash;
  next();
});

//verifyPassword
adminSchema.methods.verifyPassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};

//model
const Admin = mongoose.model("Admin", adminSchema);

module.exports = Admin;
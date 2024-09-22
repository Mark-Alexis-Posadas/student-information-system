const mongoose = require("mongoose");

const { Schema } = mongoose;

const studentSchema = new Schema({
  studentRoll: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  firstName: {
    type: String,
    required: true,
  },
  middleName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  gender: {
    type: String,
    // enum: ["male", "female", "other"],
    required: true,
  },
  dateOfBirth: {
    type: Date,
    required: true,
  },
  contact: {
    type: Number,
    required: true,
  },
  presentAddress: {
    type: String,
    required: true,
  },
  permanentAddress: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Student", studentSchema);

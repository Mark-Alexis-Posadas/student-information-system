const Student = require("../models/Student");
const getAllStudent = async (req, res) => {
  try {
    const students = await Student.find({});
    res.json(students);
  } catch (error) {
    res.status(500).json({ message: err.message });
  }
};

const createStudent = async (req, res) => {
  const {
    studentRoll,
    email,
    firstName,
    middleName,
    lastName,
    gender,
    dateOfBirth,
    contact,
    presentAddress,
    permanentAddress,
  } = req.body;
  try {
    const student = Student.create({
      studentRoll,
      email,
      firstName,
      middleName,
      lastName,
      gender,
      dateOfBirth,
      contact,
      presentAddress,
      permanentAddress,
    });
    res.status(201).json(student);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const getSingleStudent = async (req, res) => {
  const { id } = req.params;
  try {
    const student = await Student.findById(id);
    res.json(student);
  } catch (error) {
    res.status(500).json({ message: err.message });
  }
};

const deleteStudent = async (req, res) => {
  const { id } = req.params;
  try {
    const student = await Student.findByIdAndDelete(id);
    if (!student) return res.status(404).json({ message: "student not found" });
    res.json({ message: "student deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = {
  getAllStudent,
  createStudent,
  getSingleStudent,
  deleteStudent,
};

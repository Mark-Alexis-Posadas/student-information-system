const express = require("express");
const router = express.Router();
const studentController = require("../controllers/StudentController");
router.get("/get-all-student", studentController.getAllStudent);
router.post("/create-student", studentController.createStudent);
router.get("/get-single-student/:id", studentController.getSingleStudent);
router.delete("/delete-student/:id", studentController.deleteStudent);
// router.put("/api/update-student");

module.exports = router;

const express = require("express");
const router = express.Router();
const studentController = require("../controllers/StudentController");
router.get("/get-all-student", studentController.getAllStudent);
router.post("/create-student", studentController.createStudent);
// router.get("/api/get-single-student/:id");

// router.delete("/api/delete-student/:id");
// router.put("/api/update-student");

module.exports = router;

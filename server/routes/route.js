const express = require("express");
const router = express.Router();

router.get("/api/get-all-student");
router.get("/api/get-single-student");
router.post("/api/create-student");
router.delete("/api/delete-student");
router.put("/api/update-student");

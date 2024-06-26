const express = require("express");
const router = express.Router();
const attendanceController = require("../Controllers/AttendaceControllers");

// Route to add new attendance
router.get("/", attendanceController.getAllAttendances);
router.post("/", attendanceController.addAttendances);
router.get("/:id", attendanceController.getById);

module.exports = router;

const express = require("express");
const router = express.Router();
const Leave = require("../Model/LeaveModel");
const LeaveController = require("../Controllers/LeaveConstollers");

router.get("/", LeaveController.getAllLeaves);
router.post("/", LeaveController.addLeaves);

module.exports = router;

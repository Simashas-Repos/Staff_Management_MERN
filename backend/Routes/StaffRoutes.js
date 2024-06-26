const express = require("express");
const router = express.Router();
const Staff = require("../Model/StaffModel");
const StaffController = require("../Controllers/StaffControllers");

router.get("/", StaffController.getAllStaffs);
router.post("/", StaffController.addStaffs);
router.get("/:id", StaffController.getById);
router.put("/:id", StaffController.updateStaff);
router.delete("/:id", StaffController.deleteStaff);

module.exports = router;

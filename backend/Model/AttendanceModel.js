const mongoose = require("mongoose");

const attendanceSchema = new mongoose.Schema({
  name: String,
  jobRole: String,
  checkIn: Date,
  checkOut: Date,
});

const Attendance = mongoose.model("Attendance", attendanceSchema);

module.exports = Attendance;

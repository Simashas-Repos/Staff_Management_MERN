const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const leaveSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  jobRole: {
    type: String,
    required: true,
  },
  contactNo: {
    type: String,
    required: true,
  },
  leaveType: {
    type: String,
    required: true,
  },
  leaveDate: {
    type: Date,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("LeaveModel", leaveSchema);

const Attendance = require("../Model/AttendanceModel");

// GET all attendance records
const getAllAttendances = async (req, res, next) => {
  let attendances;

  try {
    attendances = await Attendance.find();
  } catch (err) {
    console.log(err);
  }
  //not found
  if (!attendances) {
    return res
      .status(404)
      .json({ message: "Staff member attendance not found" });
  }
  //Display all Staff members
  return res.status(200).json({ attendances });
};

//Insert Staff member details
const addAttendances = async (req, res, next) => {
  const { name, jobRole, checkIn, checkOut } = req.body;

  let attendances;

  try {
    attendances = new Attendance({
      name,
      jobRole,
      checkIn,
      checkOut,
    });
    await attendances.save();
  } catch (err) {
    console.log(err);
  }
  //can't insert staff member details
  if (!attendances) {
    return res.status(404).json({ message: "Unable to add staff member" });
  }
  return res.status(200).json({ attendances });
};

//Get by id
const getById = async (req, res, next) => {
  const id = req.params.id;

  let addAttendances;

  try {
    addAttendances = await Attendance.findById(id);
  } catch (err) {
    console.log(err);
  }

  //Not available attendance member details
  if (!addAttendances) {
    return res.status(404).json({ message: "Attendance member not found" });
  }
  return res.status(200).json({ addAttendances });
};

exports.getAllAttendances = getAllAttendances;
exports.addAttendances = addAttendances;
exports.getById = getById;

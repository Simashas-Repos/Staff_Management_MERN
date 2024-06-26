const Staff = require("../Model/StaffModel");

const getAllStaffs = async (req, res, next) => {
  let Staffs;

  try {
    staffs = await Staff.find();
  } catch (err) {
    console.log(err);
  }
  //not found
  if (!staffs) {
    return res.status(404).json({ message: "Staff member not found" });
  }
  //Display all Staff members
  return res.status(200).json({ staffs });
};

//Insert Staff member details
const addStaffs = async (req, res, next) => {
  const {
    image,
    name,
    address,
    password,
    gender,
    email,
    nic,
    jobRole,
    contactNo,
  } = req.body;

  let staffs;

  try {
    staffs = new Staff({
      imageUrl: image,
      name,
      address,
      password,
      gender,
      email,
      nic,
      jobRole,
      contactNo,
    });
    await staffs.save();
  } catch (err) {
    console.log(err);
  }
  //can't insert staff member details
  if (!staffs) {
    return res.status(404).json({ message: "Unable to add staff member" });
  }
  return res.status(200).json({ staffs });
};

//Get by id
const getById = async (req, res, next) => {
  const id = req.params.id;

  let staffs;

  try {
    staffs = await Staff.findById(id);
  } catch (err) {
    console.log(err);
  }

  //Not available staff member details
  if (!staffs) {
    return res.status(404).json({ message: "Staff member not found" });
  }
  return res.status(200).json({ staffs });
};

//Update Staff member details
const updateStaff = async (req, res, next) => {
  const id = req.params.id;
  const {
    image,
    name,
    address,
    password,
    gender,
    email,
    nic,
    jobRole,
    contactNo,
  } = req.body;
  let staffs;

  try {
    staffs = await Staff.findByIdAndUpdate(id, {
      imageUrl: image,
      name,
      address,
      password,
      gender,
      email,
      nic,
      jobRole,
      contactNo,
    });
    staffs = await staffs.save();
  } catch (err) {
    console.log(err);
  }

  //Not update staff member details
  if (!staffs) {
    return res
      .status(404)
      .json({ message: "Can't update staff member details" });
  }
  return res.status(200).json({ staffs });
};

//Delete Staff member details
const deleteStaff = async (req, res, next) => {
  const id = req.params.id;
  let staffs;

  try {
    staffs = await Staff.findByIdAndDelete(id);
  } catch (err) {
    console.log(err);
  }

  //Can't delete staff member details
  if (!staffs) {
    return res
      .status(404)
      .json({ message: "Can't deleet staff member details" });
  }
  return res.status(200).json({ staffs });
};

exports.getAllStaffs = getAllStaffs;
exports.addStaffs = addStaffs;
exports.getById = getById;
exports.updateStaff = updateStaff;
exports.deleteStaff = deleteStaff;

const cors = require("cors");
const express = require("express");
const mongoose = require("mongoose");
const FormDataModel = require("./models/FormData");

const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect(
  "mongodb+srv://dbuser:server123@clustertest.6chncvw.mongodb.net/?retryWrites=true&w=majority&appName=Clustertest"
);

// //call add staff model
// require("./Model/StaffModel");
// const Staff = mongoose.model("StaffModel");
// app.post("/addstaff", async(req, res)=>{
//   const {image, name, address, password, gender, email, nic, jobRole, contactNo,}
//   try{
//     await Staff.create({
//     image,
//     name,
//     address,
//     password,
//     gender,
//     email,
//     nic,
//     jobRole,
//     contactNo,
//     });
//     res.send({ status: "ok"});
//   }catch(err){
//     res.send({status: err});
//   }
// });

// //login
// app.post("/slogin", async (req, res) => {
//   try {
//     const { email, password } = req.body;
//     const staffs = await Staff.findOne({ email });
//     if (!staffs) {
//       return res.json(404).json({ message: "Staff Member not found" });
//     }
//     if (staffs.password === password) {
//       return res.json(401).json({ status: "Ok" });
//     } else {
//       return res.json({ err: "Incorrect Password" });
//     }
//   } catch (err) {
//     res.status(500).json({ err: "server error" });
//   }
// });

// app.listen(5001, () => {
//   console.log("Server listining on http://127.0.0.1:3001");
// });

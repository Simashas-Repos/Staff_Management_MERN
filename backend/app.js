const express = require("express");
const mongoose = require("mongoose");
const router = require("./Routes/StaffRoutes");
const router1 = require("./Routes/LeaveRoutes");
const router2 = require("./Routes/AttendanceRoutes");
const cors = require("cors");
const loginRouter = require("./Routes/LoginRoutes");

const app = express();

//Middleware
app.use(express.json());
app.use(cors());
app.use("/staffs", router);
app.use("/leaves", router1);
app.use("/attendances", router2);
app.use("/slogin", loginRouter);

mongoose
  .connect(
    "mongodb+srv://Simasha:Simasha@staffapp.vjy3p0p.mongodb.net/Staff-Crud?retryWrites=true&w=majority&appName=staffApp"
  )
  .then(() => console.log("Connected to mongoDB"))
  .then(() => {
    app.listen(5000);
  })
  .catch((err) => console.log(err));

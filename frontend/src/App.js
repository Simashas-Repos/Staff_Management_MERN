import React from "react";
import "./App.css";
import Team from "./Components/Team/Team";
import { Route, Routes } from "react-router-dom";
import AddStaff from "./Components/AddStaff/AddStaff";
import ReqLeave from "./Components/ReqLeave/ReqLeave";
import Attendance from "./Components/Attendance/Attendance";
import StaffsDetails from "./Components/StaffDetails/StaffsDetails";
import UpdateStaffs from "./Components/UpdateStaff/UpdateStaff";
import Login from "./Components/sLogin/sLogin";
import Dashboard from "./Components/SDashboard/sDashboard";

function App() {
  return (
    <div>
      <React.Fragment>
        <Routes>
          <Route path="/" element={<Team />} />
          <Route path="/mainteam" element={<Team />} />
          <Route path="/addstaff" element={<AddStaff />} />
          <Route path="/requestleave" element={<ReqLeave />} />
          <Route path="/attendance" element={<Attendance />} />
          <Route path="/staffdetails" element={<StaffsDetails />} />
          <Route path="/staffdetails/:id" element={<UpdateStaffs />} />
          <Route path="/slogin" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </React.Fragment>
    </div>
  );
}

export default App;

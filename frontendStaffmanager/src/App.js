import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Team from "./Components/Team/Team"; // Import the Team component
import StaffsDetails from "./Components/StaffDetails/StaffsDetails";
import LeaveDetails from "./Components/LeaveDetails/LeaveDetails";
import Attendance from "./Components/Attendance/Attendance";

function App() {
  return (
    <div>
      <React.Fragment>
        <Routes>
          <Route path="/" element={<Team />} />
          <Route path="/staffdetails" element={<StaffsDetails />} />
          <Route path="/leavedetails/" element={<LeaveDetails />} />
          <Route path="/attendance" element={<Attendance />} />
        </Routes>
      </React.Fragment>
    </div>
  );
}

export default App;

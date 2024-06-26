import React, { useState } from "react";
import Nav from "../Nav/Nav";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./ReqLeave.css";
import image3 from "../../images/img3.jpeg";

function ReqLeave() {
  const history = useNavigate();
  const [inputs, setInputs] = useState({
    name: "",
    email: "",
    jobRole: "",
    contactNo: "",
    leaveType: "",
    leaveDate: "",
    description: "",
  });

  const handleChange = (e) => {
    setInputs((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(inputs);
    window.alert("Leave rquest added successfully");
    await sendRequest();
  };

  const sendRequest = async () => {
    await axios
      .post("http://localhost:5000/leaves", {
        name: String(inputs.name),
        email: String(inputs.email),
        jobRole: String(inputs.jobRole),
        contactNo: String(inputs.contactNo),
        leaveType: String(inputs.leaveType),
        leaveDate: String(inputs.leaveDate),
        description: String(inputs.description),
      })
      .then((res) => res.data);
  };

  return (
    <div className="ReqLeave">
      <div
        className="bg"
        style={{
          backgroundSize: "cover",
          backgroundImage: `url(${image3})`,
          height: "100vh",
        }}
      >
        <form onSubmit={handleSubmit} className="reqform">
          <h1>Request for leave</h1>
          <label className="lb1">Name</label>
          <br />
          <input
            className="in1"
            type="text"
            name="name"
            onChange={handleChange}
            value={inputs.name}
            required
          />
          <br /> <br />
          <label className="lb1" for="email">
            Email
          </label>
          <br />
          <input
            className="in1"
            type="email"
            id="email"
            name="email"
            onChange={handleChange}
            value={inputs.email}
            required
          />
          <br /> <br />
          <label className="lb1">Job Role</label>
          <br />
          <select
            name="jobRole"
            value={inputs.jobRole}
            onChange={handleChange}
            required
          >
            <option value="">Select Job Role</option>
            <option value="Doctor">Doctor</option>
            <option value="Nurse">Nurse</option>
            <option value="Other">Other</option>
          </select>
          <br /> <br />
          <label className="lb1" for="contactNo">
            Contact No
          </label>
          <br />
          <input
            className="in1"
            type="text"
            id="contactNo"
            name="contactNo"
            onChange={handleChange}
            value={inputs.contactNo}
            pattern="[0-9]{10}"
            title="Please enter a 10-digit phone number"
            required
          />
          <br /> <br />
          <label className="lb1">Leave Type</label>
          <br />
          <select
            name="leaveType"
            value={inputs.leaveType}
            onChange={handleChange}
            required
          >
            <option value="">Select leaveType</option>
            <option value="Medical">Medical</option>
            <option value="Annual">Annual</option>
            <option value="Casual">Casual</option>
          </select>
          <br /> <br />
          <label className="lb1">Leave Date</label>
          <br />
          <input
            className="in1"
            type="date"
            name="leaveDate"
            onChange={handleChange}
            value={inputs.leaveDate}
            required
          />
          <br /> <br />
          <label className="lb1">Description</label>
          <br />
          <input
            className="in1"
            type="text"
            name="description"
            onChange={handleChange}
            value={inputs.description}
            required
          />
          <br />
          <br />
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default ReqLeave;

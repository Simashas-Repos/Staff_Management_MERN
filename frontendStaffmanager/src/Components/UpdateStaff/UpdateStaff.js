import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "./UpdateStaff.css";
import image2 from "../../images/img2.png";

function UpdateStaff() {
  const [inputs, setInputs] = useState({});
  const history = useNavigate();
  const id = useParams().id;

  useEffect(() => {
    const fetchHandler = async () => {
      await axios
        .get(`http://localhost:5000/staffs/${id}`)
        .then((res) => res.data)
        .then((data) => setInputs(data.staffs));
    };
    fetchHandler();
  }, [id]);

  const sendRequest = async () => {
    await axios
      .put(`http://localhost:5000/staffs/${id}`, {
        name: String(inputs.name),
        address: String(inputs.address),
        gender: String(inputs.gender),
        email: String(inputs.email),
        nic: String(inputs.nic),
        jobRole: String(inputs.jobRole),
        contactNo: String(inputs.contactNo),
      })
      .then((res) => res.data);
  };

  const handleChange = (e) => {
    setInputs((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(inputs);
    sendRequest().then(() => history("/staffdetails"));
    window.alert("Staff member updated successfully");
  };

  return (
    <div>
      <div
        className="bg"
        style={{
          backgroundSize: "cover",
          backgroundImage: `url(${image2})`,
          height: "717px",
        }}
      >
        <form onSubmit={handleSubmit} className="updateStaff">
          <h1>Update Staff Member Details</h1>
          <label className="lb2">Name</label>
          <br />
          <input
            className="in2"
            type="text"
            name="name"
            onChange={handleChange}
            value={inputs.name}
            required
          />
          <br />

          <label className="lb3">Address</label>
          <br />
          <input
            className="in3"
            type="text"
            name="address"
            onChange={handleChange}
            value={inputs.address}
            required
          />
          <br />

          <label className="lb2">Gender</label>
          <br />
          <label>
            <input
              type="radio"
              name="gender"
              value="Male"
              checked={inputs.gender === "Male"}
              onChange={handleChange}
              required
            />
            Male
          </label>
          <label className="lb2">
            <input
              type="radio"
              name="gender"
              value="Female"
              checked={inputs.gender === "Female"}
              onChange={handleChange}
            />
            Female
          </label>
          <br />

          <label className="lb2" for="email">
            Email
          </label>
          <br />
          <input
            className="in2"
            type="email"
            id="email"
            name="email"
            onChange={handleChange}
            value={inputs.email}
            required
          />
          <br />

          <label className="lb2">NIC</label>
          <br />
          <input
            className="in2"
            type="text"
            name="nic"
            onChange={handleChange}
            value={inputs.nic}
            required
          />
          <br />

          <label className="lb2">Job Role</label>
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
          <br />

          <label className="lb2" for="contactNo">
            Contact No
          </label>
          <br />
          <input
            className="in2"
            type="text"
            id="contactNo"
            name="contactNo"
            onChange={handleChange}
            value={inputs.contactNo}
            pattern="[0-9]{10}"
            title="Please enter a 10-digit phone number"
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

export default UpdateStaff;

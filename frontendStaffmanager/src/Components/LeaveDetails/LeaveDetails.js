import React, { useEffect, useState, useRef } from "react";
import axios from "axios";
import Nav from "../Nav/Nav";
import Leave from "../Leave/Leave";
import "../LeaveDetails/LeaveDetails.css";
import image3 from "../../images/img3.jpeg";

const URL = "http://localhost:5000/leaves";

const fetchHandler = async () => {
  return await axios.get(URL).then((res) => res.data);
};

function LeaveDetails() {
  const [leaves, setLeaves] = useState([]);

  useEffect(() => {
    fetchHandler().then((data) => setLeaves(data.leaves || []));
  }, []);

  //Search bar
  const [searchQuery, setSearchQuery] = useState("");
  const [noResults, setNoResults] = useState(false);

  const handleSearch = () => {
    fetchHandler().then((data) => {
      const filteredLeaves = data.leaves.filter((leave) =>
        Object.values(leave).some((field) =>
          field.toString().toLowerCase().includes(searchQuery.toLowerCase())
        )
      );
      setLeaves(filteredLeaves);
      setNoResults(filteredLeaves.length === 0);
    });
  };

  return (
    <div>
      <Nav />
      <div
        className="sbg2"
        style={{
          backgroundSize: "cover",
          backgroundImage: `url(${image3})`,
          height: "641px",
        }}
      >
        <input
          className="ss2"
          onClick={handleSearch}
          onChange={(e) => setSearchQuery(e.target.value)}
          type="text"
          name="Search"
          placeholder="Search Staff Member Leave Details"
        ></input>
        <h1 className="sdetail2">Staff Member Leave Request Details</h1>

        <table className="stb2">
          <thead>
            <tr>
              <th>L_No</th>
              <th>Name</th>
              <th>Email</th>
              <th>Job Role</th>
              <th>Contact No</th>
              <th>Leave Type</th>
              <th>Leave Date</th>
              <th>Description</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {leaves.map((leave, index) => (
              <Leave key={index} leave={leave} index={index + 1} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default LeaveDetails;

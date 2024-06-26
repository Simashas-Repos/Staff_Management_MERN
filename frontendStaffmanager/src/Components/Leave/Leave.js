import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "../Leave/Leave.css";

function Leave({ leave, index }) {
  const { name, email, jobRole, contactNo, leaveType, leaveDate, description } =
    leave;
  const history = useNavigate();

  // Function to format the date string
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toISOString().split("T")[0];
  };

  //send whatsapp message
  const handleSendLeaveStatus = () => {
    const whatsappURL =
      "https://api.whatsapp.com/send/?phone=%2B94763073630&text&app_absent=0";
    window.open(whatsappURL, "_blank");
  };

  return (
    <tr>
      <td>{index}</td>
      <td>{name}</td>
      <td>{email}</td>
      <td>{jobRole}</td>
      <td>{contactNo}</td>
      <td>{leaveType}</td>
      {/* Format the leaveDate using formatDate function */}
      <td>{formatDate(leaveDate)}</td>
      <td>{description}</td>

      <td>
        <Link
          to={`/leavedetails/${leave._id}`}
          style={{ textDecoration: "none" }}
        >
          <button className="accept1" onClick={handleSendLeaveStatus}>
            Accept
          </button>
        </Link>
        <button className="reject1" onClick={handleSendLeaveStatus}>
          Reject
        </button>
      </td>
    </tr>
  );
}

export default Leave;

import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "../Staff/Staff.css";

function Staff({ staff, index, hideActions }) {
  const {
    _id,
    imageUrl,
    name,
    address,
    gender,
    email,
    nic,
    jobRole,
    contactNo,
  } = staff;
  const history = useNavigate();

  // Function to generate S_No based on job role
  const generateS_No = (jobRole, index) => {
    let prefix = "";
    switch (jobRole) {
      case "Doctor":
        prefix = "D";
        break;
      case "Nurse":
        prefix = "N";
        break;
      default:
        prefix = "O";
    }
    return `${prefix}${index.toString().padStart(3, "0")}`;
  };

  const deleteHandler = async () => {
    try {
      await axios.delete(`http://localhost:5000/staffs/${_id}`);
      // Assuming you want to redirect after deletion
      history("/staffdetails");
      window.alert("staff member deleted successfully");
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <tr>
      <td>{generateS_No(jobRole, index)}</td>
      <td>
        <img src={staff.imageUrl} alt="staff" className="staff-image" />
      </td>
      <td>{name}</td>
      <td>{address}</td>
      <td>{gender}</td>
      <td>{email}</td>
      <td>{nic}</td>
      <td>{jobRole}</td>
      <td>{contactNo}</td>
    </tr>
  );
}

export default Staff;

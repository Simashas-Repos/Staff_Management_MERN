import React from "react";
import image5 from "../../images/img5.png";
import { Link } from "react-router-dom";
import "./sDashboard.css";

function Team() {
  return (
    <div className="team">
      <div className="sLbtn7">
        <button className="sbtn6">
          <Link to="/requestleave" className="st5">
            Request Leave
          </Link>
        </button>
        <button className="sbtn6">
          <Link to="/attendance" className="st5">
            Mark Attendance
          </Link>
        </button>
        l
        <button className="sbtn6">
          <Link to="/staffdetails" className="st5">
            Staff Member Details
          </Link>
        </button>
        <button className="sbtn6">
          <Link to="/" className="st5">
            Staff Member Ratings
          </Link>
        </button>
      </div>

      <h1 className="t5">Highly Experienced & Qualified</h1>
      <h4>Our Team</h4>

      <p className="sp6">
        Leading veterinarians in Sri Lanka who have training and expertise
        running animal clinics both domestically and internationally make up the
        medical team. Our staff of Doctors, Nurses, and Others all have a wealth
        of expertise that they use to their jobs and duties.
      </p>
      <form>
        <div
          className="bg"
          style={{
            width: "878px",
            backgroundSize: "cover",
            backgroundImage: `url(${image5})`,
            height: "417px",
            marginLeft: "350px",
            marginTop: "-10px",
          }}
        />
      </form>
    </div>
  );
}

export default Team;

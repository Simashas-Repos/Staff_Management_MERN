import React from "react";
import Nav from "../Nav/Nav";
import "./Team.css";
import image5 from "../../images/img5.png";
import { Link } from "react-router-dom";

function Team() {
  return (
    <div className="team">
      <Nav />

      <div className="sLbtn6">
        <button className="sbtn6">
          <Link to="/addstaff" className="st5">
            Register Staff Member
          </Link>
        </button>
        <button className="sbtn6">
          <Link to="/slogin" className="st5">
            Login Staff Member
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

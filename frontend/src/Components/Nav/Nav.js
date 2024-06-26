import React from "react";
import "./Nav.css";
import { IoSearchSharp } from "react-icons/io5";
import { FaCircleUser } from "react-icons/fa6";
import paws from "../../images/paws.jpg";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

export default function Nav() {
  const navigate = useNavigate();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="navBar">
      <img className="logo" src={paws} alt="Logo" />
      <ul>
        <li>
          <a className="a1" href="/">
            Home
          </a>
        </li>
        <li>
          <a className="a1" href="/">
            About
          </a>
        </li>
        <li>
          <a className="a1" href="/">
            Appointments
          </a>
        </li>
        <li className="team-ll">
          <Link className="a1" to="/mainteam">
            Team
          </Link>
        </li>
      </ul>

      <div className="searchBox">
        <input type="text" placeholder="Search" />
        <IoSearchSharp
          className="searchbtn"
          onClick={() => navigate("/details")}
        />
      </div>
      <FaCircleUser className="user" onClick={scrollToTop} />
    </div>
  );
}

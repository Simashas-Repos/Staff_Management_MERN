import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import image7 from "../../images/img7.jpg";
import "./sLogin.css";

function Login() {
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:5000/slogin",
        loginData
      );
      console.log("Login Successful", response);
      navigate("/dashboard");
    } catch (error) {
      console.error("Error during login: ", error);
      alert("Invalid email or password");
    }
  };

  return (
    <div className="slogin">
      <div
        className="bg"
        style={{
          backgroundSize: "cover",
          backgroundImage: `url(${image7})`,
          height: "100vh",
        }}
      >
        <form onSubmit={handleSubmit} className="sloginform">
          <h1 className="sloginh">Staff Member Login</h1>
          <label className="slb8">Email:</label>
          <input
            className="sin8"
            type="email"
            name="email"
            value={loginData.email}
            onChange={handleChange}
            required
          />
          <br />
          <label className="slb8">Password:</label>
          <input
            className="sin8"
            type="password"
            name="password"
            value={loginData.password}
            onChange={handleChange}
            required
          />
          <br />
          <button className="lbutton" type="submitlog">
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;

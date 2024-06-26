import React, { useState, useEffect } from "react";
import Nav from "../Nav/Nav";
import axios from "axios";
import "../Attendance/Attendance.css";
import image6 from "../../images/img6.jpg";

const URL = "http://localhost:5000/attendances";

const fetchHandler = async () => {
  return await axios.get(URL).then((res) => res.data);
};

function Attendance() {
  const [attendances, setAttendances] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [noResults, setNoResults] = useState(false);
  const [inputs, setInputs] = useState({
    name: "",
    jobRole: "",
    checkIn: "",
    checkOut: "",
  });

  useEffect(() => {
    fetchHandler().then((data) => setAttendances(data.attendances || []));
  }, []);

  // const handleSearch = () => {
  //   fetchHandler().then((data) => {
  //     const filteredAttendances = data.attendances.filter((attendance) =>
  //       Object.values(attendance).some((field) =>
  //         field.toString().toLowerCase().includes(searchQuery.toLowerCase())
  //       )
  //     );
  //     setAttendances(filteredAttendances);
  //     setNoResults(filteredAttendances.length === 0);
  //   });
  // };

  // const handleChange = (e) => {
  //   setInputs((prevState) => ({
  //     ...prevState,
  //     [e.target.name]: e.target.value,
  //   }));
  // };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(inputs);
    window.alert("Attendance marked successfully");
    await sendRequest();

    // Calculate total hours
    const totalHours = calculateTotalHours(inputs.checkIn, inputs.checkOut);
    // Update state with the newly inserted data
    const newAttendance = {
      name: inputs.name,
      jobRole: inputs.jobRole,
      checkIn: inputs.checkIn,
      checkOut: inputs.checkOut,
      totalHours: totalHours.hours,
      totalMinutes: totalHours.minutes,
    };
    setAttendances([...attendances, newAttendance]);
    // Clear the input fields after submission
    setInputs({
      name: "",
      jobRole: "",
      checkIn: "",
      checkOut: "",
    });
  };

  const sendRequest = async () => {
    await axios
      .post("http://localhost:5000/attendances", {
        name: String(inputs.name),
        jobRole: String(inputs.jobRole),
        checkIn: String(inputs.checkIn),
        checkOut: String(inputs.checkOut),
      })
      .then((res) => res.data);
  };

  const calculateTotalHours = (checkIn, checkOut) => {
    const checkInTime = new Date(checkIn);
    const checkOutTime = new Date(checkOut);
    const diff = (checkOutTime - checkInTime) / (1000 * 60 * 60); // Difference in hours
    const hours = Math.floor(diff); // Get the integer part
    const minutes = Math.floor((diff - hours) * 60); // Get the remaining minutes
    return { hours, minutes };
  };

  const formatDateTime = (dateTime) => {
    const date = new Date(dateTime);
    <br />;
    const formattedDate =
      `${date.toLocaleDateString()}` + "     " + `${date.toLocaleTimeString()}`;
    return formattedDate;
  };

  return (
    <div className="sattendance4">
      <Nav />
      <div
        className="sbg4"
        style={{
          backgroundSize: "cover",
          backgroundImage: `url(${image6})`,
          height: "100vh",
        }}
      >
        <div>
          {/* <input
            className="ss4"
            onClick={handleSearch}
            onChange={(e) => setSearchQuery(e.target.value)}
            type="text"
            name="Search"
            placeholder="Search Staff Member Attendance Details"
          ></input> */}
          <h1 className="sdetail4">Staff Member Attendance Details</h1>

          <table className="stb4" style={{ marginTop: "30px" }}>
            <thead>
              <tr>
                <th>Name</th>
                <th>Job Role</th>
                <th>Check-In Date & Time</th>
                <th>Check-Out Date & Time</th>
              </tr>
            </thead>
            <tbody>
              {attendances.map((attendance, index) => (
                <tr key={index}>
                  <td>{attendance.name}</td>
                  <td>{attendance.jobRole}</td>
                  <td>{formatDateTime(attendance.checkIn)}</td>
                  <td>{formatDateTime(attendance.checkOut)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Attendance;

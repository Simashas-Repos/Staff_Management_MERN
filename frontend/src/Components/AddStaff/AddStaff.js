import React, { useState } from "react";
import Nav from "../Nav/Nav";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./AddStaff.css";
import image1 from "../../images/img1.jpeg";
import Pica from "pica";

function AddStaff() {
  const history = useNavigate();
  const [inputs, setInputs] = useState({
    image: "",
    name: "",
    address: "",
    password: "",
    gender: "",
    email: "",
    nic: "",
    jobRole: "",
    contactNo: "",
  });

  const pica = Pica();

  const handleChange = (e) => {
    const { name, files } = e.target;
    if (name === "image" && files[0]) {
      const reader = new FileReader();
      reader.onload = (readerEvent) => {
        const img = new Image();
        img.onload = () => {
          const canvas = document.createElement("canvas");
          const maxWidth = 800; // Set the maximum width to 800 pixels
          const maxHeight = 600; // Set the maximum height to 600 pixels
          let width = img.width;
          let height = img.height;

          // Calculate the new dimensions
          if (width > height) {
            if (width > maxWidth) {
              height *= maxWidth / width;
              width = maxWidth;
            }
          } else {
            if (height > maxHeight) {
              width *= maxHeight / height;
              height = maxHeight;
            }
          }

          canvas.width = width;
          canvas.height = height;

          // Resize the image with high quality
          pica
            .resize(img, canvas, {
              unsharpAmount: 80,
              unsharpRadius: 0.6,
              unsharpThreshold: 2,
            })
            .then((result) => pica.toBlob(result, "image/jpeg", 0.3)) // Set the quality to 30%
            .then((blob) => {
              const reader = new FileReader();
              reader.onload = (e) => {
                setInputs((prevState) => ({
                  ...prevState,
                  image: e.target.result,
                }));
              };
              reader.readAsDataURL(blob);
            });
        };
        img.src = readerEvent.target.result;
      };
      reader.readAsDataURL(files[0]);
    } else {
      setInputs((prevState) => ({ ...prevState, [name]: e.target.value }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:5000/staffs", inputs);
      console.log("Staff member registered successfully", response);
      history("/"); // Navigate after successful post
      alert("Staff member registered successfully");
    } catch (err) {
      console.error("Error during staff addition: ", err);
      alert("Error adding staff");
    }
  };
  /*const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(inputs);
    await sendRequest();
    window.alert("Staff member registered successfully");
  };*/

  const sendRequest = async () => {
    await axios
      .post("http://localhost:5000/staffs", {
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

  return (
    <div className="AddStaff3">
      <div
        className="sbg3"
        style={{
          backgroundSize: "cover",
          backgroundImage: `url(${image1})`,
          height: "92vh",
        }}
      >
        <form onSubmit={handleSubmit} className="saddform3">
          <h1>Add Staff Member Details</h1>
          <label className="image">Image</label>
          <br />
          <input
            className="slb3"
            type="file"
            name="image"
            onChange={handleChange}
            required
          />
          <br />
          {inputs.image && (
            <img
              src={inputs.image}
              alt="Preview"
              style={{
                width: "50px%",
                maxWidth: "50px",
                height: "auto",
                borderRadius: "50%",
              }}
            />
          )}
          <br />
          <label className="slb3">Name</label>
          <br />
          <input
            className="sin3"
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
            className="sin3"
            type="text"
            name="address"
            onChange={handleChange}
            value={inputs.address}
            required
          />
          <br />
          <label>Gender</label>
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
          <label className="slb3">
            <input
              type="radio"
              name="gender"
              value="Female"
              checked={inputs.gender === "Female"}
              onChange={handleChange}
            />
            Female
          </label>
          <br /> <br />
          <label className="slb3" for="email">
            Email
          </label>
          <br />
          <input
            className="sin3"
            type="email"
            id="email"
            name="email"
            onChange={handleChange}
            value={inputs.email}
            required
          />
          <br />
          <label className="slb3">Password</label>
          <br />
          <input
            className="sin3"
            type="password"
            name="password"
            onChange={handleChange}
            value={inputs.password}
            title="Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, and one number"
            required
          />
          <br />
          <label className="lb3">NIC</label>
          <br />
          <input
            className="sin3"
            type="text"
            name="nic"
            pattern="[0-9]{9}[V]|[0-9]{11}"
            onChange={handleChange}
            title="Please enter a valid NIC number (11 digits or 9 digits followed by 'V')"
            value={inputs.nic}
            required
          />
          <br />
          <label>Job Role</label>
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
          <label className="slb3" for="contactNo">
            Contact No
          </label>
          <br />
          <input
            className="sin3"
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

export default AddStaff;

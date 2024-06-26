import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "./UpdateStaff.css";
import image2 from "../../images/img2.png";
import Pica from "pica";

function UpdateStaff() {
  const [inputs, setInputs] = useState({
    image: "",
    name: "",
    address: "",
    gender: "",
    email: "",
    nic: "",
    jobRole: "",
    contactNo: "",
  });
  const history = useNavigate();
  const id = useParams().id;
  const pica = Pica();

  useEffect(() => {
    const fetchHandler = async () => {
      await axios
        .get(`http://localhost:5000/staffs/${id}`)
        .then((res) => res.data)
        .then((data) => setInputs(data.staffs));
    };
    fetchHandler();
  }, [id]);

  // const sendRequest = async () => {
  //   await axios
  //     .put(`http://localhost:5000/staffs/${id}`, {
  //       name: String(inputs.name),
  //       address: String(inputs.address),
  //       gender: String(inputs.gender),
  //       email: String(inputs.email),
  //       nic: String(inputs.nic),
  //       jobRole: String(inputs.jobRole),
  //       contactNo: String(inputs.contactNo),
  //     })
  //     .then((res) => res.data);
  // };

  // const handleChange = (e) => {
  //   setInputs((prevState) => ({
  //     ...prevState,
  //     [e.target.name]: e.target.value,
  //   }));
  // };

  const handleChange = (e) => {
    const { name, files, value } = e.target;
    if (name === "image" && files[0]) {
      const reader = new FileReader();
      reader.onload = (readerEvent) => {
        const img = new Image();
        img.onload = () => {
          const canvas = document.createElement("canvas");
          const maxWidth = 800;
          const maxHeight = 600;
          let width = img.width;
          let height = img.height;

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
            .then((result) => pica.toBlob(result, "image/jpeg", 0.3))
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
      setInputs((prevState) => ({ ...prevState, [name]: value }));
    }
  };

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   console.log(inputs);
  //   sendRequest().then(() => history("/staffdetails"));
  //   window.alert("Staff member updated successfully");
  // };
  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios
      .put(`http://localhost:5000/staffs/${id}`, inputs)
      .then(() => {
        alert("Staff member updated successfully");
        history("/staffdetails"); // Redirect to staff details page
      })
      .catch((err) => {
        console.error("Error during staff update: ", err);
        alert("Error updating staff");
      });
  };

  return (
    <div>
      <div
        className="bg"
        style={{
          backgroundSize: "cover",
          backgroundImage: `url(${image2})`,
          height: "120vh",
        }}
      >
        <form onSubmit={handleSubmit} className="updateStaff">
          <h1>Update Staff Member Details</h1>
          <label className="slb4">Image</label>
          <br />
          {inputs.image && (
            <img
              src={inputs.image}
              alt="Profile Preview"
              style={{
                width: "50px%",
                maxWidth: "50px",
                height: "auto",
                borderRadius: "50%",
              }}
            />
          )}
          <br />
          <input type="file" name="image" onChange={handleChange} />
          {/* Include other form fields here */}
          <br /> <br />
          <label className="slb4">Name</label>
          <br />
          <input
            className="sin4"
            type="text"
            name="name"
            onChange={handleChange}
            value={inputs.name}
            required
          />
          <br /> <br />
          <label className="slb4">Address</label>
          <br />
          <input
            className="sin4"
            type="text"
            name="address"
            onChange={handleChange}
            value={inputs.address}
            required
          />
          <br /> <br />
          <label className="slb4">Password</label>
          <br />
          <input
            className="sin4"
            type="password"
            name="password"
            onChange={handleChange}
            value={inputs.password}
            required
          />
          <br />
          <label className="slb4">Gender</label>
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
          <label className="slb4">
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
          <label className="slb4" for="email">
            Email
          </label>
          <br />
          <input
            className="sin4"
            type="email"
            id="email"
            name="email"
            onChange={handleChange}
            value={inputs.email}
            required
          />
          <br /> <br />
          <label className="slb4">NIC</label>
          <br />
          <input
            className="sin4"
            type="text"
            name="nic"
            pattern="[0-9]{9}[V]|[0-9]{11}"
            onChange={handleChange}
            title="Please enter a valid NIC number (11 digits or 9 digits followed by 'V')"
            value={inputs.nic}
            required
          />
          <br /> <br />
          <label className="slb4">Job Role</label>
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
          <br /> <br />
          <label className="slb4" for="contactNo">
            Contact No
          </label>
          <br />
          <input
            className="sin4"
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

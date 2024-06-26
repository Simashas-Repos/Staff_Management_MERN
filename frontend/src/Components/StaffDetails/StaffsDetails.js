import React, { useEffect, useState, useRef } from "react";
import axios from "axios";
import Nav from "../Nav/Nav";
import Staff from "../Staff/Staff";
import "../StaffDetails/StaffsDetails.css";
import image4 from "../../images/img4.jpg";
import { useReactToPrint } from "react-to-print";

const URL = "http://localhost:5000/staffs";

const fetchHandler = async () => {
  return await axios.get(URL).then((res) => res.data);
};

function StaffDetails() {
  const [staffs, setStaffs] = useState([]);

  useEffect(() => {
    fetchHandler().then((data) => setStaffs(data.staffs || []));
  }, []);

  //print PDF
  const ComponentsRef = useRef();
  // const handlePrint = useReactToPrint({
  //   content: () => ComponentsRef.current,
  //   DocumentTitle: "Staff Member Report",
  //   onafterprint: () => alert("Staff Member Report Successfully Download!"),
  // });

  //Search bar
  const [searchQuary, setSearchQuery] = useState("");
  const [noResults, setNoResults] = useState(false);

  const handleSearch = () => {
    fetchHandler().then((data) => {
      const filteredStaffs = data.staffs.filter((staffs) =>
        Object.values(staffs).some((field) =>
          field.toString().toLowerCase().includes(searchQuary.toLowerCase())
        )
      );
      setStaffs(filteredStaffs);
      setNoResults(filteredStaffs.length === 0);
    });
  };

  const handlePrint = useReactToPrint({
    content: () => {
      // Temporarily hide actions for printing
      setHideActionsForPrint(true);
      const printContents = ComponentsRef.current;
      setHideActionsForPrint(false);
      return printContents;
    },
    DocumentTitle: "Staff Member Report",
    onafterprint: () => {
      alert("Staff Member Report Successfully Downloaded!");
      setHideActionsForPrint(false);
    },
  });

  const [hideActionsForPrint, setHideActionsForPrint] = useState(false);

  return (
    <div>
      <div
        className="sbg1"
        style={{
          backgroundSize: "cover",
          backgroundImage: `url(${image4})`,
          height: "100vh",
        }}
      >
        <input
          className="ss1"
          onClick={handleSearch}
          onChange={(e) => setSearchQuery(e.target.value)}
          type="text"
          name="Seach"
          placeholder="Search Staff Member Details"
        ></input>
        <h1 className="sdetail1">Staff Member Details</h1>
        {noResults ? (
          <div>
            <p className="sp1">No Staff Member found</p>
          </div>
        ) : (
          <div ref={ComponentsRef} className="sdetails1">
            <table className="stb1">
              <thead>
                <tr>
                  <th>S_No</th>
                  <th>Profile Picture</th>
                  <th>Name</th>
                  <th>Address</th>
                  <th>Gender</th>
                  <th>Email</th>
                  <th>NIC</th>
                  <th>Job Role</th>
                  <th>Contact No</th>
                  {/* <th>Action</th> */}
                  <th className="print-hide">Action</th>
                </tr>
              </thead>
              <tbody>
                {staffs.map((staff, index) => (
                  <Staff
                    key={index}
                    staff={staff}
                    index={index + 1}
                    hideActions={hideActionsForPrint}
                  />
                ))}
              </tbody>
            </table>
          </div>
        )}
        <button className="sdown1" onClick={handlePrint}>
          Download Report
        </button>
      </div>
    </div>
  );
}

export default StaffDetails;

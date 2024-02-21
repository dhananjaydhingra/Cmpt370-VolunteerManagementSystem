import React, { useState, useEffect } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./Shifts.css";

function Shifts() {
  const [shifts, setShifts] = useState([]);
  const [userShifts, setUserShifts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3500/shifts")
      .then((res) => res.json())
      .then((data) => {
        setShifts(data);
      })
      .catch((error) => console.error("Error:", error));
  }, []);

  const handleSignUp = async (shiftTitle) => {
    const shift = shifts.find((shift) => shift.title === shiftTitle);
    const userEmail = "test3@gmail.com"; // hard coded email as of now, should get this email for the logged in user
    console.log(shift.title);
    try {
      const response = await axios.post(
        "http://localhost:3500/shifts/shiftsignup",
        { shiftTitle: shift.title, userEmail }
      );
      console.log(response.data.message);
      if (response.data.message === "User already signed up for shift") {
        toast.success("User already signed up for shift");
      } else if (response.data.message === "User already signed up for shift") {
        toast.error(response.data.message);
      }
    } catch (error) {
      console.error(error);
    }
  };

  function shiftDurationToString(duration) {
    var hours = Math.floor(duration / (1000 * 60 * 60)) + " hours";
    var minutes = (minutes = Math.floor((duration / (1000 * 60)) % 60));
    if (minutes == 0) return hours;
    return hours + " " + minutes + " minutes";
  }

  return (
    <div className="shift-list">
      {shifts.map((shift) => {
        const startTime = new Date(shift.startTime).toString().split("GMT")[0];
        const endTime = new Date(shift.endTime).toString().split("GMT")[0];
        const duration = shiftDurationToString(shift.duration);
        
        return (
          <div key={shift.id} className="shift-card">
            {/* <h2>{shift.title}</h2> */}
            <h4 className="shift-title">
              {" "}
              {shift.title && shift.title.length <= 100
                ? shift.title
                : shift.title && shift.title.substring(0, 100) + "..."}
            </h4>
            <h6 className="shift-description">
              {" "}
              {shift.description && shift.description.split(" ").length <= 150
                ? shift.description
                : shift.description &&
                  shift.description.split(" ").slice(0, 150).join(" ") + "..."}
            </h6>
            <div className="shift-details">
              <p className="shift-time">Start Time: {startTime}</p>
              <p className="shift-time">End Time: {endTime}</p>
              <p className="shift-duration">Duration: {duration}</p>
              {/* <p className="shift-duration">Duration: {Number(duration) ? Number(duration).toFixed(2) : '00.00'} hours</p> */}
            </div>
            <button
              className="signup-button"
              onClick={() => handleSignUp(shift.title)}
            >
              Sign Up
            </button>
          </div>
        );
      })}
      <ToastContainer />
    </div>
  );
}

export default Shifts;

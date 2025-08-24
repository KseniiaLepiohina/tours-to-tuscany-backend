import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import BookingDetails from "../pages/Purchase/BookingDetails";
import User from "../../src/pages/Purchase/UserDetails";
import Payment from "../pages/Purchase/Payment";

export default function ProgressBar() {
  // const [currentStep, setCurrentStep] = useState(1);
  const location = useLocation();
  let currentStep = 1;
  if(location.pathname.includes("booking")) currentStep = 1;
  if(location.pathname.includes("User")) currentStep = 2;
  if(location.pathname.includes("Payment")) currentStep = 3;

  return (
    <nav >
      <ul style={{display:'flex',alignItems:'baseline',listStyleType:'none'}}>
        <li className={currentStep >= 1 ? "step done" : "step"}>
          <h5>1</h5>
          <h6>Booking Details</h6>
        </li>
        <li className={`path ${currentStep > 1 ? "active" : ""}`}></li>

        <li className={currentStep >= 2 ? "step done" : "step"}>
          <h5>2</h5>
          <h6>User Details</h6>
        </li>
        <li className={`path ${currentStep > 2 ? "active" : ""}`}></li>

        <li className={currentStep === 3 ? "step done" : "step"}>
          <h5>3</h5>
          <h6>Payment</h6>
        </li>
      </ul>
      
    </nav>
  );
}

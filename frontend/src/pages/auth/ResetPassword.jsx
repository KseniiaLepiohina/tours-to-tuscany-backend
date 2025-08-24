import React, { useState } from "react";
import axios from "axios";
import reset from "../../assets/home/icons/CheckIn/resetPassword.svg";
import arrow from "../../assets/home/icons/CheckIn/arrow-left.svg";
import { Link } from "react-router-dom";
import Login from "./Login";
import CheckEmail from "./CheckEmail";
import { setNewPassword } from "../../slices/authSlice";
import { useDispatch } from "react-redux";

export default function ResetPassword({ isOpen }) {
  const [email, setEmail] = useState("");
  const dispatch = useDispatch();

  axios
    .post("http://localhost:3000/auth/resetpassword")
    .then((res) => console.log("Password was successfully reseted"))
    .catch((res) => console.log("Error with reseting password"));

  const handleSubmit = async (e) => {
    e.preventDefault();

  try {
    const res = await axios.post("http://localhost:3000/auth/resetpassword", { email });
    console.log("Password reset link sent");

    // Після успіху — навігація
    window.location.href = "/auth/checkemail";
  } catch (err) {
    console.error("Error sending reset email:", err);
  }

  };

  return (
    <section className="modal">
      {/* {isOpen && ( */}

      <section className="auth">
        <form
          onSubmit={handleSubmit}
          method="post"
          action="'/auth/resetPassword"
        >
            <img className="form_img" src={reset} alt="reset password" />
          <h1>Forgot Password</h1>
          <h4>No worries, we'll send you reset instructions.</h4>

          <label for="email">Email Address</label>
          <input
            type="email"
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email address"
            required
          />
          <Link to="/auth/checkemail" element={<CheckEmail />}>
            <button className="general_btn" type="submit">
              Reset Password
            </button>
          </Link>
          <section>
            <Link to="/auth/login" element={<Login />}>
              <button 
              style={{backgroundColor:'transparent',border:'none',display:'flex',alignItems:'center',gap:'0.4em'}}
              >
                <img src={arrow} alt="back to login" /> 
                <span color="#333333">Back to Login
                </span>
              </button>
            </Link>
          </section>
        </form>
      </section>
      {/* )} */}
    </section>
  );
}

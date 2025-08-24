import React, { useState } from "react";
import { Link,useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import arrow from "../../assets/home/icons/CheckIn/arrow-left.svg";
import Login from "./Login";
import reset from "../../assets/home/icons/CheckIn/resetPassword.svg";
import ApprovedPassword from "./ApprovedPassword";
import { useDispatch } from "react-redux";
import { setNewPassword } from "../../slices/authSlice";

export default function NewPassword() {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const location = useLocation();
const queryParams = new URLSearchParams(location.search);
const token = queryParams.get('token');

  
  const dispatch = useDispatch();
  const navigate = useNavigate();

 const handleSubmit = async (e) => {
  e.preventDefault();

  if (password !== confirmPassword) {
    setError("Passwords do not match");
    return;
  }

  try {
    const res = await axios.post("http://localhost:3000/auth/newPassword", {
      token, // pass the token
      newPassword: password,
    });

    console.log(res.data);
    navigate('/auth/newPassword/approvedPassword'); // if successful, navigate to approvedPassword page
  } catch (err) {
    console.error(err);
    setError("Failed to update password");
  }
};



  return (
    <section className="modal">
      <section className="auth">
        <form onSubmit={handleSubmit} method="post" action="/auth/newPassword">
          <img className="form_img" src={reset} alt="enter new password" />
          <h1>Set New Password</h1>
          <p>
            Your new password must be different from previously used passwords.
          </p>

          <label for="new_password">New Password</label>
          <input
            value={password}
            name="new_password"
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"
          />
          <label for="confirm_password">Confirm Password</label>
          <input
            value={confirmPassword}
            name="confirm_password"
            type="password"
            onChange={(e) => setConfirmPassword(e.target.value)}
            placeholder="Enter your password"
          />

          <Link
            to="/auth/newPassword/approvedPassword"
            element={<ApprovedPassword />}
          >
            <button className="general_btn" type="submit">
              {" "}
              Reset Password
            </button>
          </Link>
          {error && <p style={{ color: "red" }}>{error}</p>}

          <section>
            <Link to="/auth/login" element={<Login />}>
              <button
                style={{
                  backgroundColor: "transparent",
                  border: "none",
                  display: "flex",
                  alignItems: "center",
                  gap: "0.4em",
                }}
              >
                <img src={arrow} alt="back to login" />
                <span color="#333333">Back to Login</span>
              </button>
            </Link>
          </section>
        </form>
      </section>
    </section>
  );
}

import React from "react";
import { Link, useNavigate } from "react-router-dom";
import checkemail from "../../assets/home/icons/CheckIn/check_mail.svg";
import arrow from "../../assets/home/icons/CheckIn/grey_arrow.svg";
import close from "../../assets/home/icons/CheckIn/window-close.svg";

import Login from "./Login";

export default function CheckEmail() {
  const navigate = useNavigate();

  const handleCloseModal = () => {
    navigate("/");
  };
  return (
    <section className="modal">
      <section className="auth">
        <form method="GET">
          <img className="form_img" src={checkemail} alt="check your email" />
          <section>
            <h1>Check your email</h1>
            <button onClick={handleCloseModal} className="modal-close-btn ">
              <img src={close} alt="close the window" />
            </button>
          </section>

          <p>We sent a password reset link to @loremipsum@gmail.com</p>
          <button className="btn_submit" type="submit">
            {" "}
            Open email app
          </button>
          <p> Didn't receive the email? Click to resend</p>
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

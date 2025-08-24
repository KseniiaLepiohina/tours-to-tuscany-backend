import React from "react";
import { Link } from "react-router-dom";

import arrow from "../../assets/home/icons/CheckIn/grey_arrow.svg";
// import NoTickets from '../account/NoTickets';
import check from "../../assets/home/icons/CheckIn/check_mail.svg";
import Home from "../home";
import Login from "./Login";

export default function ApprovedPassword() {
  // const {user} = useContext(AuthContext);
  // const navigate = useNavigate()

  // if(user) {
  // navigate('/account/haveTickets')
  // } else{
  //     navigate('/account/noTickets')
  // }

  // useEffect(() => {
  //     const checkTickets = async () => {
  //       try {
  //         const response = await fetch(
  //           "http://localhost:4000/auth/newPassword/approvedPassword",
  //           {
  //             method: "GET",
  //             headers: {
  //               "Content-Type": "application/json",
  //             },
  //           }
  //         );

  //         if (response.ok) {
  //           const res = await response.json();
  //           // Navigate based on ticket status
  //           if (user || res.hasTickets) {
  //             navigate("/account/haveTickets");
  //           } else {
  //             navigate("/account/noTickets");
  //           }
  //         } else {
  //           // Fallback if response is not OK
  //           navigate("/account/noTickets");
  //         }
  //       } catch (err) {
  //         console.error("Error fetching ticket status:", err);
  //         navigate("/account/noTickets");
  //       }
  //     };
  //     checkTickets();
  //   }, [user, navigate]);

  return (
    <section className="modal">
      <section className="auth">
        <form method="GET" action="/auth/approwedPassword">
          <img src={check} alt="password succecfully reset" />
          <h1>Password Reset</h1>
          <h4>
            {" "}
            Your password has been successfully reset. Click below to login in
            magically.
          </h4>
          <Link to="/tours">
            <button className="general_btn" type="submit">
              Continue
            </button>
          </Link>
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

import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {Icon} from '@iconify/react'
import logo from "../assets/home/logo.svg";
import avatar from "../assets/home/icons/CheckIn/avatar.svg";
import tickets from "../assets/home/icons/Tours/ticket.svg";
import logOutIcon from "../assets/home/icons/CheckIn/logout.svg";
import { useDispatch, useSelector } from "react-redux";
import { setCreatedUser, setLogOut } from "../slices/authSlice";

export default function Header() {
  const dispatch = useDispatch();
  const location = useLocation();

  const currentUser = useSelector((state) => state.auth.currentUser);

  useEffect(() => {
    const storedUser = localStorage.getItem("currentUser");
    if (storedUser) {
      dispatch(setCreatedUser(storedUser));
    }
  }, [dispatch]);

  const overlayRoutes = ["/", "/aboutUs"];
  const isOverlay = overlayRoutes.includes(location.pathname);

  return (
    <header className={`header ${isOverlay ? "overlay" : ""}`}>
      <Link to="/">
        <img className="logo" src={logo} alt="Tours to Tuscany" />
      </Link>
      <section style={{ display: "flex", alignItems:'baseline', gap:"167px" }}>
        <nav>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/aboutUs">About us</Link>
          </li>
          <li>
            <Link to="/Tours">Tours</Link>
          </li>
          <li>
            <Link to="/contact">Contact Us</Link>
          </li>
        </nav>

        <section className="header_options">
          <select>
            <option>ENG</option>
            <option>UKR</option>
          </select>

          {currentUser ? (
            <UserHeader dispatch={dispatch} />
          ) : (
            <>
              <Link to="/auth/login">
                <span>Login</span>
              </Link>
              <Link to="/auth/createAccount">
                <button className="general_btn">Sign Up</button>
              </Link>
            </>
          )}
        </section>
      </section>
    </header>
  );
}

function UserHeader({ dispatch }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <section style={{ position: "relative" }}>
      <button
        onClick={toggleDropdown}
        style={{ backgroundColor: "transparent", border: "none" }}
      >
        <img
          style={{ height: "1.6em", width: "1.6em", borderRadius: "100%" }}
          src={avatar}
          alt="User avatar"
        />
      </button>

      {isOpen && (
        <div
          style={{
            position: "absolute",
            top: "2.2em",
            right: 0,
            backgroundColor: "#fff",
            borderRadius: "1.4em",
            boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
            zIndex: 10,
            minWidth: "160px",
          }}
        >
          <Link
            to="/account/haveTickets"
            style={{ textDecoration: "none", color: "#000" }}
          >
            <div
              style={{
                padding: "1em 1.2em",
                display: "flex",
                alignItems: "center",
                gap: "0.6em",
              }}
            >
              <span>
                <Icon icon="f7:tickets-fill" height="1.5em" width="1.5em" />
              </span>
              {/* <img src={tickets} alt="tickets" style={{ width: "1.2em" }} /> */}
              <span>My Tickets</span>
            </div>
          </Link>

          <div
            onClick={() => {
              dispatch(setLogOut());
              setIsOpen(false);
            }}
            style={{
              padding: "1em 1.2em",
              display: "flex",
              alignItems: "center",
              gap: "0.6em",
              cursor: "pointer",
            }}
          >
            <span>
            <Icon icon="clarity:logout-line" height="1.5em" width="1.5em" />
            </span>
            {/* <img src={logOutIcon} alt="logout" style={{ width: "1.2em" }} /> */}
            <span>Logout</span>
          </div>
        </div>
      )}
    </section>
  );
}

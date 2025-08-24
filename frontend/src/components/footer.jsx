import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/home/logo.svg";
import { Icon } from "@iconify/react/dist/iconify.js";

export default function Footer() {
  return (
    <footer className="ftr_main">
      <img className="logo" src={logo} alt="tours to Tuscany" />

      <hr style={{ color: "#333333", width: "100%" }} />

      <section style={{ display: "flex", gap: "2em" }}>
        <ul className="service">
          <h4>Service</h4>
          <li>Bike and Rickshaw rental </li>
          <li>Guided Tours of Lucca</li>
          <li>Guided Bike Tour of Lucca</li>
          <li>Trip In The Tuscan Hills</li>
          <li>Transportation With Luxury Cars</li>
          <li>Wine Tours By Bus With Guide</li>
        </ul>

        <ul className="service">
          <h4>Home</h4>

          <Link to={"/"}>
            <li>Home</li>
          </Link>
          <Link to={"/aboutUs"}>
            <li>About Us</li>
          </Link>
          <Link to={"/tours"}>
            <li> Tour Packages</li>
          </Link>
        </ul>

        <ul className="service">
          <h4>Help</h4>
          <li> Terms of Use</li>
          <li> Provicy Policy</li>
        </ul>

        <section className="contacts">
          <ul className="service">
            <h4>Contacts</h4>
            <section className="contacts">
              <span>
                <Icon icon="ci:location" color="#FA8B02" height="1.5em" width="1.5em" alt="Piazza Napoleone" />
              </span>
              <li> Piazza Napoleone,Lucca,Tuscany</li>
            </section>
            <section className="contacts">
              <span>
                <Icon icon="clarity:phone-handset-solid"
                  color="#FA8B02"
                  height="1.5em"
                  width="1.5em"
                  alt="call to us"
                />
              </span>
              <li> +39 346 368 5708</li>
            </section>
            <section className="contacts">
              <span>
                <Icon icon="fluent:mail-16-filled"
                  color="#FA8B02"
                  height="1.5em"
                  width="1.5em"
                  alt="send to us"
                />
              </span>
              <li> italianlimo@gmail.com</li>
            </section>
          </ul>
        </section>

        <section className="social">
          <h4>Social Media</h4>
          <section className="media">
            <span>
              <Icon icon="ant-design:twitter-circle-filled" color="#FA8B02"
                height="3.125em"
                width="3.125em"
                alt="follow us in Twitter"
              />
            </span>
            {/* <img src={twtr} alt="follow us in Twitter" /> */}
            <span>
              <Icon icon="entypo-social:facebook-with-circle" color="#FA8B02"
                height="3.125em"
                width="3.125em"
                alt="follow us in Facebook"
              />
            </span>
            {/* <img src={fcbk} alt="follow us in Facebook" /> */}
            <span>
              <Icon icon="ant-design:twitter-circle-filled" color="#FA8B02"
                height="3.125em"
                width="3.125em"
                alt="follow us in Instagram"
              />
            </span>
            {/* <img src={instgrm} alt="follow us in Instagram" /> */}
          </section>
        </section>
      </section>

      <hr style={{ width: "100%" }} />
      <section className="rights">
        <p>Copyright © 2022. All rights reserved.</p>
      </section>
    </footer>
  );
}

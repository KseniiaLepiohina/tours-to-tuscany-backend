import React from "react";

import about from "../assets/home/about.png";
import bike from "../assets/home/service/service_bike.png";
import guide from "../assets/home/service/service_guide.png";
import taxi from "../assets/home/service/service_taxi.png";
import bus from "../assets/home/service/service_bus.png";

import rickshaw from "../assets/home/package/package_ricksaw.png";
import day from "../assets/home/package/icons/one day.svg";
import map from "../assets/home/package/icons/map.svg";
import discount from "../assets/home/package/icons/discount.svg";
import support from "../assets/home/package/icons/support.svg";

import bikeTour from "../assets/home/package/package_tour.png";
import mbike from "../assets/home/package/icons/mountain bike.svg";
import bottle from "../assets/home/package/icons/water.svg";
import Guide from "../assets/home/icons/guide.svg";

import trips from "../assets/home/package/package_trips.png";
import tickets from "../assets/home/package/icons/ticket.svg";
import BUS from "../assets/home/package/icons/bus.svg";
import companion from "../assets/home/package/icons/companion.svg";

import driver from "../assets/home/package/icons/driver.svg";
import loc from "../assets/home/package/icons/location.svg";
import price from "../assets/home/icons/price.svg";

import BookBike from "../components/bookBike.jsx";
import Statistic from "../components/statistic.jsx";

import TuscanySlider from "../components/Carousel/TuscanyCarousel.jsx";
import Reviews from "../components/Carousel/TestimonialsCarousel.jsx";
import { Icon } from "@iconify/react/dist/iconify.js";
// import TourPanel from "../components/TourPanel.jsx";

export default function Home() {

  return (
    <>
      <section className="home_container">
        <section className="home_panel">
          <section className="intro">
            <h1> Enjoy in the best way!</h1>
            <h2> Enjoy our services for your trip anytime</h2>
          </section>
          {/* <TourPanel /> */}
        </section>
      </section>

      <TuscanySlider />

      <section className="introduction">
        <img src={about} alt="Welcome to our site" />
        <section className="welcome_descrip">
          <ul>
            <li>
              <p>WELCOME TO OUR SITE!</p>
            </li>
            <li>
              <strong />
              <h1>We are the best company for your visit</h1>
            </li>
            <li>
              <p>
                After decades of experience, and a whole life in Lucca, we offer
                you the most complete tourism service in the city. In addition
                to having bikes and rickshaws to have as much fun as you want,
                you have the choice of tour guides with whom to tour and drivers
                for your every need! We offer packages in the way that you get
                the most at the lowest price. Book with us and we will always be
                available for you!
              </p>
            </li>
          </ul>
          <Statistic />
        </section>
      </section>

      <section className="service_home">
        <section className="servitem">
          <img src={bike} alt="Bike and rickshaw rental" />
          <h3>Bike and rickshaw rental</h3>
          <h5>Book your quality vehicle quickly for an hour or all day!</h5>
        </section>
        <section className="servitem">
          <img src={guide} alt="Guided tour" />
          <h3>Guided tour of the countryside</h3>
          <h5>
            Live the real Lucchese experience by visiting the suburbs by bike!
          </h5>
        </section>
        <section className="servitem">
          <img src={taxi} alt="NCC service" />
          <h3>Taxi and NCC service</h3>
          <h5>
            Do you need not only a bike but also a driver? Then you have found
            the right place!
          </h5>
        </section>
        <section className="servitem">
          <img src={bus} alt="Bus package" />
          <h3>Bus Package</h3>
          <h5>
            Do you need not only a bike but also a driver? Then you have found
            the right place!
          </h5>
        </section>
      </section>

      <BookBike />

      {/*Popular Packages */}
      <section className="packages_main">
        <section className="carousel_title">
          <h2>
            <strong>The Most Popular Packages</strong>
          </h2>
        </section>

        <section className="container_packages">
          <section className="container_package">
            <img
              src={rickshaw}
              alt="Your bike for a day"
            />
            <section >
              <section className="welcome_descrip">
                <ul>
                   <h2>BIKE / RICKSHAW</h2>
              <span>

                <sup>€</sup> 10 <sub>/day</sub>
              </span>
                </ul>
               
              </section>
              <section className="details_packages">
                <span>
                  <Icon

                    icon="quill:calendar"
                    height={24}
                    width={24}
                  />
                </span>
                <p>Your bike for a day</p>
              </section>

              <section className="details_packages">
                <span>
                  <Icon
                    icon="fontisto:map"
                    color="#FA8B02"
                    height={24}
                    width={24}
                  />
                </span>
                <p>City App</p>
              </section>

              <section className="details_packages">
                <span>
                  <Icon
                    icon="streamline:discount-percent-coupon"
                    color="#FA8B02"
                    height={24}
                    width={24}
                  />
                </span>
                <p>Discount on Rickshaw</p>
              </section>

              <section className="details_packages">
                <span>
                  <Icon
                    icon="streamline:customer-support-1"
                    color="#FA8B02"
                    height={24}
                    width={24}
                  />
                </span>
                <p>Guaranteed Support</p>
              </section>
            </section>

            <button> Book Now</button>
          </section>

          <section className="container_package">
            <img src={bikeTour} alt="BIKE TOURS" />
            <section>

            
            <section className="welcome_descrip" >
              <ul>
                <h2>BIKE TOURS</h2>
              <span>

                <sup>€</sup> 30 <sub>/day</sub>
              </span>
              </ul>
              </section>
              <section className="details_packages">
                <Icon
                  icon="arcticons:mountain-bike-xtreme"
                  color="#FA8B02"
                  height={24}
                  width={24}
                />
                <p>A Mountain Bike Included</p>
              </section>

              <section className="details_packages">
                <span>
                  <Icon
                    icon="mdi:hiking"
                    color="#FA8B02"
                    height={24}
                    width={24}
                  />
                </span>
                <p>A Guide For You</p>
              </section>

              <section className="details_packages">
                <span>
                  <Icon
                    icon="material-symbols:water-bottle-outline-sharp"
                    color="#FA8B02"
                    height={24}
                    width={24}
                  />
                </span>
                <p>Bottle of water</p>
              </section>

              <section className="details_packages">
                <span>
                  <Icon
                    icon="streamline:customer-support-1"
                    color="#FA8B02"
                    height={24}
                    width={24}
                  />
                </span>
                <p>Guaranteed Support</p>
              </section>
            </section>

            <button>Book Now</button>
          </section>

          <section className="container_package">
            <img  src={trips} alt="BUS TRIPS" />

            <section className="welcome_descrip">
              <ul>
                <h2>BUS TRIPS</h2>
              <span>

                <sup>€</sup> 45 <sub>/day</sub>
              </span>
              </ul>
               </section>
              <section className="details_packages">
                <span>
                  <Icon
                    icon="f7:tickets-fill"
                    color="#FA8B02"
                    height={24}
                    width={24}
                  />
                </span>
                <p>Park ticket</p>
              </section>
              <section className="details_packages">
                <span>
                  <Icon
                    icon="bx:bus"
                    color="#FA8B02"
                    height={24}
                    width={24}
                  />
                </span>
                <p>Return bus</p>
              </section>
              <section className="details_packages">
                <span>
                  <Icon
                    icon="la:user-friends"
                    color="#FA8B02"
                    height={24}
                    width={24}
                  />
                </span>
                <p>Companion</p>
              </section>
              <section className="details_packages">
                <span>
                  <Icon
                    icon="streamline:customer-support-1"
                    color="#FA8B02"
                    height={24}
                    width={24}
                  />
                </span>
                <p>Guaranteed Support</p>
              </section>
                       

            <button>Book Now</button>
          </section>

          <section className="container_package">
            <img 
            style={{height:'21.25em'}}
            src={taxi} alt="TRANSFER" />
            <section>

            
            <section className="welcome_descrip">
              <ul>
                <h2>TRANSFER</h2>
              <span>

                <sup>€</sup> 10 <sub>/day</sub>
              </span>
              </ul>
              
              <section className="details_packages">
                <span>
                  <Icon
                    icon="healthicons:truck-driver-outline"
                    color="#FA8B02"
                    height={24}
                    width={24}
                  />
                </span>
                <p>Personal Driver</p>
              </section>
              <section className="details_packages">
                <span>
                  <Icon
                    icon="mingcute:location-2-line"
                    color="#FA8B02"
                    height={24}
                    width={24}
                  />
                </span>
                <p>Wherever You Want</p>
              </section>
              <section className="details_packages">

                <img className="icons" src={price} alt="At the best price" />
                <p>At the best price</p>
              </section>
              <section className="details_packages">
                <span>
                  <Icon
                    icon="streamline:customer-support-1"
                    color="#FA8B02"
                    height={24}
                    width={24}
                  />
                </span>
                <p>Guaranteed Support</p>
              </section>
            </section>
            </section>
            <button>Book Now</button>
          </section>
        </section>
      </section>
      <Reviews />
    </>
  );
}

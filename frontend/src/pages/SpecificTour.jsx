import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";

import group from "../assets/home/icons/Tours/group_col.svg";
import duration from "../assets/home/icons/Tours/duration.svg";
import location from "../assets/home/icons/Footer/location.svg";
import guide from "../assets/home/icons/guide.svg";
import lang from "../assets/home/icons/Tours/language.svg";
import fees from "../assets/home/icons/Tours/ticket.svg";
import transport from "../assets/home/icons/Tours/transport_col.svg";
import { MainGallery } from "../components/MainGallery";
import { GalleryPlaces } from "../components/GalleryPlaces";
import Testimotionals from "../components/Carousel/TestimonialsCarousel";
import back from "../assets/home/icons/CheckIn/grey_arrow.svg";
import TimePicker from "../Picker/TimePicker.jsx";
import DatePicker from "../Picker/DatePicker.jsx";
import { Icon } from "@iconify/react/dist/iconify.js";

import axios from "axios";
import Tours from "./Tours";

export default function SpecificTour() {
  
  const { id } = useParams();
  const [tour, setTour] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTour = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await axios.get(
          `http://localhost:5000/tour/tours/${id}`
        );
        setTour(response.data);
      } catch (error) {
        setError(error.message || "Error to set up tours");
      } finally {
        setLoading(false);
      }
    };
    fetchTour();
  }, [id]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;
  if (!tour) return <p>Tour not found</p>;

  return (
    <section className="specifictour">
      <section>
        <Link to="/tours" element={<Tours />}>
          <span className="btn_back">
            <Icon icon="bi:arrow-right" height={24} width={24}/>
            {/* <img src={back} alt="back to the tour page" /> */}
            <p>Back</p>
          </span>
        </Link>
      </section>

      <section className="main_specificTour">
        <MainGallery />
        <section className="tour" key={tour.id}>
          <section className="spectTour_intro">
            <h2>{tour.title}</h2>
            <section className="specTour_price">
              <h2>from</h2>
              <p>
                <strong>{tour.adultPrice} €</strong>
              </p>
            </section>
            <h3>{tour.short_description}</h3>
          </section>

          <section className="spectTour_intro">
            <h3>Select a date</h3> <DatePicker />
          </section>
          <section className="spectTour_intro">
            <h3>Time</h3>
            <section className="book_set">
              <TimePicker />
            </section>
          </section>
          <Link to={`/booking/${tour._id}`}>
            <button className="general_btn">Buy Now</button>
          </Link>
        </section>
      </section>
      <section className="detail_container">
        <h3>Details</h3>
        <p>{tour.details}</p>
        <section className="detail">
          <Icon 
          icon="mdi:account-group" 
          color="#FA8B02" 
          height={24} 
          width={24}
          role="img"
          aria-label="number of people in the group"
          />
          {/* <img src={group} alt="number of people in the group" /> */}
          <h3>Number of group: {tour.people}</h3>
        </section>
        <section className="detail">
          <Icon 
          icon="mdi:hourglass" 
          color="#FA8B02" 
          height={24} 
          width={24} 
          role="img"
          aria-label="trip duration"
          />
          {/* <img src={duration} alt="trip duration" /> */}
          <h3>
            <strong>Duration:</strong> {tour.duration}
          </h3>
        </section>

        <section className="detail">
          {/* <img src={location} alt="departure area" /> */}
          <Icon
           icon="mdi:map-marker"
             color="#FA8B02"
              height={24}
               width={24}
               role="img"
               aria-label="departure area"
               />
          <h3>Departuring and arriving areas: {tour.departure}</h3>
        </section>

        <section className="detail">
          {/* <img src={guide} alt="guide" /> */}
          <Icon 
          icon="mdi:hiking" 
          color="#FA8B02" 
          height={24} 
          width={24}
          role="img"
          aria-label="included guide"
          />
          <h3>Guide service: {tour.guide}</h3>
        </section>

        <section className="detail">
          {/* <img src={lang} alt="language tour" /> */}
          <Icon
          icon="mdi:translate"
          color="#FA8B02" 
          height={24} 
          width={24}
          role="img"
          aria-label="language tour"
          />
          <h3>Language: {tour.language}</h3>
        </section>

        <section className="detail">
          {/* <img src={fees} alt="entry fee" /> */}
          <Icon 
          icon="f7:tickets-fill"
          color="#FA8B02" 
          height={24} 
          width={24}
          role="img"
          aria-label="entry fee"
          />
          <h3>Entry Fees: {tour.fees}</h3>
        </section>

        <section className="detail">
          <Icon
           icon="mdi:bus" 
            color="#FA8B02" 
            height={24} 
            width={24}
            role="img"
            aria-label="available transport"
            />
          <h3>Transportation: {tour.transport}</h3>
        </section>
      </section>
      <GalleryPlaces />

      <Testimotionals id={tour._id} />
    </section>
  );
}

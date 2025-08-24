import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import clndr from '../assets/home/icons/Tours/clndr_orng.svg';
import ppl from '../assets/home/icons/Tours/group_col.svg';
import arrow from '../assets/home/icons/Tours/arrow-right.svg';
import BookBike from '../components/bookBike';
import Testimonials from '../components/Carousel/TestimonialsCarousel';
// import SpecificTour from '../pages/SpecificTour';
import axios from 'axios';


export default function Tours() {

  
  const [tours, setTours] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTours = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await axios.get('http://localhost:5000/tour/tours');
        setTours(response.data);
      } catch (error) {
        setError(error.message || 'Error to set up tours');
      } finally {
        setLoading(false);
      }
    };
    fetchTours();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;
 

  return (
    <section>
      <h1>Tour Packages</h1>
      <section className="tours_main_container">
        {tours.map((tour) => (
          <section className="tour" key={tour._id}>
            <img className="logo_tour" src={tour.img} alt={tour.title} />
            <h2>
              <strong>{tour.title}</strong>
            </h2>
            <section className="dest_price">
              <h3>from</h3> <h2>{tour.adultPrice}€</h2>
            </section>

            <section className="details">
              <section className="sub_details">
                <img className="icons" src={clndr} alt="Choose a date" />
                <p>{tour.visit}</p>
              </section>
              <section className="details">
                <section className="sub_details">
                  <img className="icon" src={ppl} alt="choose a number of people" />
                  <p>{tour.people} PP.</p>
                </section>
              </section>
            </section>

            <section className="description">
              <p>{tour.short_description?.length > 5
      ? tour.short_description.slice(0, 100) + '...'
      : tour.short_description || ''}</p>
            </section>


            <section>
              <Link to={`/tours/${tour._id}`}>
                <section className="link_service">
                  <span>Read More</span> <img className="icons" src={arrow} alt="Read More" />
                </section>
              </Link>
            </section>
          </section>
        ))}
      </section>


      <section className="carousel_title">
        <h1>Services</h1>

      </section>
      <section className="services">

        <section className="service">
          <img src="https://firebasestorage.googleapis.com/v0/b/tuscany-6d07c.appspot.com/o/Services%2Fbike%26rickhaw.png?alt=media&token=091b2ab2-c320-4bcf-bdfa-cbb63edd764f" alt="Bike and rickshaw rental" />
          <h2>Bike and rickshaw rental</h2>
          <p>Book your quality vehicle quickly for an hour or all day!</p>
          <section className="link_service">
            <span>Read More</span> <img className="icons" src={arrow} alt="Read More" />
          </section>

        </section>

        <section className="service">
          <img src="https://firebasestorage.googleapis.com/v0/b/tuscany-6d07c.appspot.com/o/Services%2Fguide_lucca.png?alt=media&token=0762fc8d-e7f3-46bd-9efa-fbd76bf72f42" alt="Guided tours of Lucca" />
          <h2>Guided tours of Lucca</h2>
          <p>Live the real Lucchese experience by visiting the suburbs by bike!</p>

          <section className="link_service">

            <span>Read More</span> <img className="icons" src={arrow} alt="Read More" />
          </section>
        </section>

        <section className="service">
          <img src="https://firebasestorage.googleapis.com/v0/b/tuscany-6d07c.appspot.com/o/Services%2Ftrip_l_h.png?alt=media&token=c0ae626f-78ec-45f3-8121-71a90864195d" alt="Trips In The Tuscan Hills" />
          <h2>Trips In The Tuscan Hills</h2>
          <p>Do you need not only a bike but also a driver? Then you have found the right place!</p>
          <section className="link_service">

            <span>Read More</span> <img className="icons" src={arrow} alt="Read More" />
          </section>
        </section>

        <section className="service">
          <img src="https://firebasestorage.googleapis.com/v0/b/tuscany-6d07c.appspot.com/o/Services%2Fcoach_trip.png?alt=media&token=fefa63ba-cf28-440e-9993-83dd78a5855d" alt="Coach Trip Packages" />
          <h2>Coach Trip Packages</h2>
          <p> Book your quality vehicle quickly for an hour or all day!</p>
          <section className="link_service">

            <span>Read More</span> <img className="icons" src={arrow} alt="Read More" />
          </section>
        </section>

        <section className="service">
          <img src="https://firebasestorage.googleapis.com/v0/b/tuscany-6d07c.appspot.com/o/Services%2Flux_car.png?alt=media&token=99959443-00f7-4618-a39e-977af55e1718" alt="Transportation With Luxury Cars" />
          <h2>Transportation With Luxury Cars</h2>
          <p> Live the real Lucchese experience by visiting the suburbs by bike!</p>
          <section className="link_service">

            <span>Read More</span> <img className="icons" src={arrow} alt="Read More" />
          </section>
        </section>

        <section className="service">
          <img src="https://firebasestorage.googleapis.com/v0/b/tuscany-6d07c.appspot.com/o/Services%2Fwine_tour.png?alt=media&token=b9a966d2-06af-4af4-8a69-8d51b4a86edd" alt="Wine Tours By Bus With Guide" />
          <h2>Wine Tours By Bus With Guide</h2>
          <p> Do you need not only a bike but also a driver? Then you have found the right place!</p>
          <section className="link_service">

            <span>Read More</span> <img className="icons" src={arrow} alt="Read More" />
          </section>
        </section>

      </section>

      <BookBike />
      <Testimonials />
    </section>
  );
};


import React, { useState } from "react";
import Tuscany from '../../DB/Tuscany.json';
import { Icon } from "@iconify/react/dist/iconify.js";

import leftarrow from '../../assets/home/icons/test_left.svg';
import rightarr from '../../assets/home/icons/test_right.svg';

import clndr from "../../assets/home/icons/Tours/clndr_orng.svg";
import ppl from '../../assets/home/icons/Tours/group_col.svg';

export default function TuscanySlider() {
  const [slide,setSlide] = useState(0);
  // const handleNextSlide = () => {
  //   setCurrentSlide((prev) => (prev ? prev + 1 : 0));
  // };

  // const handlePrevSlide = () => {
  //   setCurrentSlide((prev) => (prev  ? prev - 1 : totalSlides - 1));
  // };


  return (
    <section className="general_container">
      <section className="carousel_title">
        <h2>Explore Our Popular Destinations</h2>
        <section className="arrows">
          <button className="prev btn" >
             <Icon icon="si:chevron-left-duotone" color="#333333" height={20} width={20}/>
          </button>
          <button className="next btn">
            <Icon icon="mdi:chevron-right" color="#333333" height={20} width={20}/>
          </button>
        </section>
      </section>
      <section className="slider_container">

      
      <section className="destination_container">
        {Tuscany.map((tour) => (
          <section className="tours" key={tour.id}>
            <img className="logo_tour" src={tour.img} alt={tour.title} />
            <h2>{tour.title}</h2>
            <section className="dest_price">
              <h3>from</h3> <h2><strong>{tour.adultPrice} €</strong></h2>
            </section>
            <section className="details">
              <section className="sub_details">
                <span>
                  <Icon
                  icon="system-uicons:calendar-month" color="#FA8B02" height="1.5em" width="1.5em"
                  />
                </span>
                <p>{tour.visit}</p>
              </section>
              <section className="sub_details">
                <Icon 
          icon="mdi:account-group" 
          color="#FA8B02" 
          height={24} 
          width={24}
          role="img"
          aria-label="number of people in the group"
          />
                <p>{tour.people}</p>
              </section>
            </section>
            <p>{tour.short_description}</p>
          </section>
        ))}
      </section>
      </section>
    </section>
  );
}

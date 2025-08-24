import React from "react";
import Statistic from '../components/statistic';
import Lucca from '../assets/home/Lucca.png'
import '../components/advantages';
import Advantages from "../components/advantages";
import Testimotionals from "../components/Carousel/TestimonialsCarousel";
import { Link } from "react-router-dom";
import Tours from "./Tours";

export default function AboutUs() {

    return(
    <>
      <section className="header_aboutUs">

        <section className="intro_aboutUs">
          <p>Our team cares about full relax</p>
          <h2><strong>Unwind and explore! We curate quality travel tours that handle everything, leaving you free to simply relax and discover new destinations.</strong></h2>
         <Link to='/tours' element={<Tours/>}>
        
          <button> View our Tour Packages </button>
        </Link>
        </section>

      </section>
      <section  className="introduction">
        <img src={Lucca} alt="Center of Lucca"/>
            <section className="welcome_descrip">
              <ul>
                <li><p>WELCOME TO OUR SITE!</p>
                </li>
                <li><h1><strong/>We Are The Center Of Lucca To Offer You The Best </h1>
                </li>
                <li>
                  <p>We are right in the center of Lucca to offer you the real city life! With years of experience in practically every tourism sector, with us you can find complete packages at the lowest price, to travel and learn and have fun all without worries and without stress. What are you waiting for, book a bright evening, a trip to beautiful Tuscany or a personal tour for you!
                  </p>
                </li>
              </ul>
                  
                <Statistic/>
            </section>
            
      </section>
          <Advantages/>
          <Testimotionals/>
    </>
    )
}
import React,{ useState } from "react";
import reviews from '../../DB/Tuscany.json';
import back from '../../assets/home/icons/test_left.svg';
import right from '../../assets/home/icons/test_right.svg';
import { Icon } from "@iconify/react/dist/iconify.js";


export default function Reviews (){

const [currentSlide,setCurrentSlide] = useState(0);


const handleNextSlide = () => {
  setCurrentSlide((prevSlide) =>
    prevSlide + 1 < reviews.length ? prevSlide + 1 : 0
  );
};

const handlePrevSlide = () => {
  setCurrentSlide((prevSlide) =>
    prevSlide - 1 >= 0 ? prevSlide - 1 : reviews.length - 1
  );
};

// const testimonial = testimotionalData[currentSlide];
    return(
       <section className="testimotionals " >

        <section className="carousel_title">
              <h2><strong>Happy Customers Says</strong></h2>
        <section  className="arrows">
          <button className="btn prev" onClick={handlePrevSlide}>
            <Icon icon="si:chevron-left-duotone" color="#333333" height={20} width={20}/>
            </button>
          <button className="btn next " onClick={handleNextSlide}>
            
            <Icon icon="mdi:chevron-right" color="#333333" height={20} width={20}/>
            
            </button>
        </section>
    
        </section>
<>

        <section className="testomonials_viewport">
       {reviews.slice(currentSlide,currentSlide + 2).map((testimonial)=> (
          <section className="testimonial_container"
            key={testimonial.id}>
              
            <section>
              <h3 className="name">{testimonial.name1}</h3>
              <p className="review">{testimonial.review1}</p>
            </section>

            <section>
              <h3 className="name">{testimonial.name2}</h3>
              <p className="review">{testimonial.review2}</p>
            </section>

            <section >
              <h3 className="name">{testimonial.name3}</h3>
              <p className="review">{testimonial.review3}</p>
            </section>

            <section>
              <h3 className="name">{testimonial.name4}</h3>
              <p className="review">{testimonial.review4}</p>
            </section>

          </section>
          ))}
        </section>
        </>
       </section>
    )
}
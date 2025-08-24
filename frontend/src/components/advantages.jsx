import React from "react";
import map from '../assets/home/icons/map.svg';
import expo from '../assets/home/icons/experience.svg';
import guide from '../assets/home/icons/guide.svg';
import price from '../assets/home/icons/price.svg';

export default function Advantages () {

    return(

        <section className="general">

        <section className="set_adv">
            <img src={map} alt="Complete Packages"/>
            <h4>Complete Packages For All Your Wishes</h4>
        </section>
        <section  className="set_adv">
            <img src={expo} alt="30 Years Of Experience"/>
            <h4>Over 30 Years Of Experience</h4>
        </section>
        <section className="set_adv">
            <img src={guide} alt="Expert Guides"/>
            <h4>Expert Guides For You</h4>
        </section>
        <section className="set_adv">
            <img src={price} alt="fun at the best price!"/>
        <h4>Guaranteed fun at the best price!</h4>
        </section>

        </section>
    )
}
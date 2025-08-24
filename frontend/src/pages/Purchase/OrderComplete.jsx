import React from "react";
import { Link } from "react-router-dom";
import { Icon } from "@iconify/react/dist/iconify.js";

export default function OrderCompleted () {

  return(
    <section className="orderComplete">
     <span>
      <Icon
      icon="akar-icons:circle-check-fill"
    color="#FA8B02"
    height="6.25em"
    width="6.25em"
      />
      </span>
      <h1>
        Your Order is complete!
      </h1>
      <p>
      You will be receiving a confirmation email with order details.
      </p>
      <Link to='/'>
       <button className="general_btn">
      Go to the Home Page
      </button>
      </Link>
     
    </section>
  )
}
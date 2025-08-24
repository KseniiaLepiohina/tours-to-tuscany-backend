import React from "react";
import { Link } from "react-router-dom";
import Home from "../home";
import check_fill from '../../assets/home/icons/check-fill.png'

export default function completeOrder () {

// axios.get('http://localhost:3000/booking/orderComplete')
//     .then(res=> console.log('Order is completed'));
//     .then(res=> console.log('Smth went wrong'));
    return(
        <section>
            <section>
                <img src={check_fill} alt="Your order is completed"/>
               <h3>Your Order is complete!</h3>
               <h4>You will be receiving a confirmation email with order details.</h4>
            </section>
            <Link to='/' element={<Home/>}>
             <button>Go to the Home Page</button>
            </Link>
        </section>
    )
}
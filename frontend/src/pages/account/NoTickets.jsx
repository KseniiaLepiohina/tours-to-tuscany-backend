import React from "react";
import noTickets from "../../assets/home/icons/noTickets.png";

export default function withoutTickets () {

    return(
        <> 
         <h1>My Tickets</h1>
        <section className="noTickets">
            <img src={noTickets} alt="Plan your trip !"/>
            <p>You don't have any tickets yet. Start planning your next trip!</p>
        </section>
        </> 
    )
}
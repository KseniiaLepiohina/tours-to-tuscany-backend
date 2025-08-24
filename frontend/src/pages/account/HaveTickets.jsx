import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import TuscanyCarousel from '../../components/Carousel/TuscanyCarousel';
import { ticketData, setUserTicket } from "../../slices/tourByIdSlice";
export default function MyTickets() {




  return (
    <section>
      <h3>My Tickets</h3>
      <section className="tickets">
        {setUserTicket.map((ticket, index) =>
          <table key={index}>
            <thead>
              <tr>
                <th>Tour Name</th>
                <th>Payment Method</th>
                <th>Price</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <img
                    style={{
                      height: "6.8em",
                      width: "10em",
                      borderRadius: "0.75em",
                    }}
                    src={ticket.img}
                    alt={ticket.title}
                  />
                </td>
                <td>{ticket.title}</td>
                <td>{ticket.date}</td>
                <td>{ticket.time}</td>
                <img src={ticket.payment.img} alt={ticket.payment.title} />
                <p>{ticket.payment.title}</p>


                <td>{ticket.status}</td>
                <td>{ticket.price}€</td>
              </tr>
            </tbody>
          </table>

        )}
      </section>
      <TuscanyCarousel />
    </section>
  )
}

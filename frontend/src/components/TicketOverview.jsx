import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { Icon } from "@iconify/react";
import {
  setTotalAdultPrice,
  setTotalChildPrice,
  setTotalInfantPrice,
  setTotalPrice
} from "../slices/tourByIdSlice";

export default function TicketOverview({ nextLink, onNext, tourId, error, loading }) {

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { selectedDate, selectedTime } = useSelector((state) => state.datepicker);

  const adultValue = useSelector((state) => state.tour.adultValue);
  const childValue = useSelector((state) => state.tour.childValue);
  const infantValue = useSelector((state) => state.tour.infantValue)
  const totalAdultPrice = useSelector(state => state.tour.totalAdultPrice);
  const totalChildPrice = useSelector(state => state.tour.totalChildPrice);
  const totalInfantPrice = useSelector(state => state.tour.totalInfantPrice);
  const totalPrice = useSelector(state => state.tour.totalPrice);

  const ticketData = useSelector(state => state.tour.ticketData);
useEffect(() => {
    dispatch(setTotalAdultPrice());
    dispatch(setTotalChildPrice());
    dispatch(setTotalInfantPrice());
    dispatch(setTotalPrice())
  }, [adultValue, childValue, infantValue, ticketData]);
  useEffect(() => {
  dispatch(setTotalPrice());
}, [totalAdultPrice, totalChildPrice, totalInfantPrice]);

  if (!ticketData) return <p>Loading tour data...</p>;


  const handleClick = () => {
    if (onNext) onNext();
    navigate(nextLink);
  };

  if (loading) return <p>Loading...</p>;

  if (error)
    return (
      <p>
        Error:{" "}
        {typeof error === "string" ? error : error.message || JSON.stringify(error)}
      </p>
    );

  return (
    <section className="border">
      <h2>Your Tickets Overview</h2>
      {ticketData && (
        <>
          <section className="ticketOverview_body">
            <img
              src={ticketData.img}
              alt="Tour"
            />
            <section className="ticketOverview_main">
              <h2>{ticketData.title}</h2>
              <section className="ticketOverview_data">
                <Icon icon="system-uicons:calendar-month" color="#FA8B02" />
                <h3>{selectedDate || "No date selected"}</h3>
              </section>
              <section className="ticketOverview_data">
                <Icon icon="system-uicons:clock" color="#FA8B02" />
                <h3>{selectedTime || "No time selected"}</h3>
              </section>
            </section>
          </section>

          <hr />

          <section>
            {/* Adult */}
            <TicketField label="Adult (18+)" price={ticketData.adultPrice} value={adultValue} total={totalAdultPrice} />
            {/* Child */}
            <TicketField label="Child (6-17)" price={ticketData.childPrice} value={childValue} total={totalChildPrice} />
            {/* Infant */}
            <TicketField label="Infant (0-5)" price={ticketData.infantPrice} value={infantValue} total={totalInfantPrice} />
          </section>

          <hr />

          <section className="details">
            <h2 style={{ color: "#333" }}>Total Price</h2>
            <h2 style={{ color: "#FA8B02" }}>€{totalPrice}</h2>
          </section>
        </>
      )}
      <button onClick={handleClick} className="general_btn">
        <h3>Go to the Next Step</h3>
      </button>
    </section>

  );
}
const TicketField = ({ label, price, value, total }) => {
  // if (!value || value <= 0) return null;
  return (
    <section className="details">
      <section className="dest_price">
        <section className="pplAmount"><p>{value}</p></section>
        <p style={{ color: "#333" }}>
          {label} (€{price})
        </p>
      </section>
      <h3>€{total}</h3>
    </section>
  );
};


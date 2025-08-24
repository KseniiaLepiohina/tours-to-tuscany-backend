import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchTourById } from "../../slices/tourByIdSlice";
import ProgressBar from '../../components/ProgressBar';
import TicketOverview from '../../components/TicketOverview';
import { Icon } from "@iconify/react";

import {
  setAdultValue,
  increaseAdultValue,
  decreaseAdultValue,

  setChildValue,
  increaseChildValue,
  decreaseChildValue,

  setInfantValue,
  increaseInfantValue,
  decreaseInfantValue,
} from "../../slices/tourByIdSlice";

import { selectedTime, selectedDate } from "../../slices/dateSlice";


export default function BookingDetails() {
  const { id } = useParams();

  const dispatch = useDispatch();
  const ticketData = useSelector((state) => state.tour.ticketData);
  const loading = useSelector((state) => state.tour.loading);
  const error = useSelector((state) => state.tour.error);


  const adultValue = useSelector(state => state.tour.adultValue);
  const childValue = useSelector(state => state.tour.childValue);
  const infantValue = useSelector(state => state.tour.infantValue);
  useEffect(() => {
    if (id) {
      dispatch(fetchTourById(id))
        .unwrap()
        .then((data) => console.log("✅ Tour fetched:", data))
        .catch((err) => console.error("❌ Fetch error:", err));
    }
  }, [dispatch, id]);

  useEffect(() => {
    if (ticketData) {
      console.log("🧾 UPDATED ticketData:", ticketData);
    }
  }, [ticketData]);



  if (loading) return <p>Loading...</p>;

  if (error)
    return (
      <p>
        Error:{" "}
        {typeof error === "string"
          ? error
          : error.message || JSON.stringify(error)}
      </p>
    );


  if (!ticketData) return <p>No data</p>;


  return (
    <>
      <ProgressBar />

      <section>
        {ticketData && (

          <section className="booking_container">
            <section>
              <section className="selectedData">

                  <section className="booking_data">
                    <h2>When you will visit?</h2>
                    <section style={{ display: "flex", alignItems: "center" }}>
                      <Icon icon="system-uicons:calendar-month" width={24} height={24} />
                      <select>
                        <option>{ticketData.selectedDate || "Choose a date"}</option>
                      </select>
                    </section>
                  </section>
                  <section className="booking_data">
                    <h2>Which time?</h2>
                    <section style={{ display: "flex", alignItems: "center" }}>
                      <Icon icon="system-uicons:clock" height={24} width={24} />
                      <select>
                        <option>{ticketData.selectedTime || "Choose a time"}</option>
                      </select>
                    </section>
                  </section>
              </section>

              <section className="ticketReq">
                 <h2>Select Your Tickets</h2>
                <ul> 
                  <li>Free for kids under 6 and disabled visitors (74%+)</li>
                  <li>
                    Pregnant women, families with strollers, and visitors on crutches
                    can buy priority tickets at the venue
                  </li>
                </ul>
              </section>
              <section
                key={ticketData.id}
                className="tickets_body">
                {/* Adult */}
                <TicketCounter
                  personData="Adult (18+)"
                 
                  price={ticketData.adultPrice}
                  value={adultValue}
                  increase={() => dispatch(increaseAdultValue(1))}
                  decrease={() => dispatch(decreaseAdultValue(1))}
                  setValue={(val) => dispatch(setAdultValue(val))}
                />
                {/* Child */}
                <TicketCounter
                  personData="Child (6-17)"
                  info1="With valid ID."
                  info2="Only in combination with: Adult (18+)"
                  price={ticketData.childPrice}
                  value={childValue}
                  increase={() => dispatch(increaseChildValue(1))}
                  decrease={() => dispatch(decreaseChildValue(1))}
                  setValue={(val) => dispatch(setChildValue(val))}
                  
                />
                {/* Infant */}
                <TicketCounter
                  personData="Infant (0-5)" 
                  info1="Only in combination with: Adult (18+)"
                  
                  price={ticketData.infantPrice && 'FREE'}
                  value={infantValue}
                  increase={() => dispatch(increaseInfantValue(1))}
                  decrease={() => dispatch(decreaseInfantValue(1))}
                  setValue={(val) => dispatch(setInfantValue(val))}
                />
              </section>


            </section>
            <TicketOverview nextLink="/User" />
          </section>
        )}</section>
    </>

  )
}

const TicketCounter = ({ personData,info1,info2, price, value, increase, decrease, setValue}) => (
  <section className="tickets_order">
    {/* <ul>
      <h2>{price}</h2>
      {info && <li>{info}</li>}
      <h3 style={{ color: "#FA8B02" }}>
        €{price !== null && price !== undefined  || "Not available"}
      </h3>
    </ul> */}

    <ul className="ticketReq">
      <h2>{personData}</h2>
      <li className="info">{info1 || null}</li>
      <li className="info">{info2 || null}</li>
      <h3 style={{color:"#FA8B02"}}>€{price}</h3>
    </ul>
    <section className="counter">
      <button onClick={decrease} disabled={value <= 0}>
        <Icon icon="akar-icons:minus" color="#3333333"/>
      </button>
      <input
        type="number"
        min={0}
        value={value}
        onChange={(e) => {
          const val = Math.max(0, Number(e.target.value));
          setValue(val);
        }}
      />
      <button onClick={increase}>
        <Icon  icon="akar-icons:plus" color="#3333333"/>
        </button>
    </section>
  </section>
) 

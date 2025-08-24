import React, { useState } from "react";
import { useDispatch } from "react-redux";
import visa from "../../assets/home/icons/Tours/visa.svg";
import discover from "../../assets/home/icons/Tours/discover.svg";
import maestro from "../../assets/home/icons/Tours/maestro.svg";
import mastercard from "../../assets/home/icons/Tours/mastercard.svg";
import paypal from "../../assets/home/icons/Tours/paypal.svg";
import ProgressBar from "../../components/ProgressBar";
import TicketOverview from "../../components/TicketOverview";
import getTypeCard from '../../utils/CardType';
import { setPaymentMethod } from "../../slices/tourByIdSlice";
import { Icon } from "@iconify/react/dist/iconify.js";

export default function Payment({ ticket }) {

  const [cardValue, setCardValue] = useState('');
  const [selectedMethod, setSelectedMethod] = useState('');
  const handlePaymentMethodChange = (e) => {
    setSelectedMethod(selectedMethod);
    dispatch(setPaymentMethod());

  }
  const dispatch = useDispatch();

  const handleInputChange = (e) => {

    const value = e.target.value.replace(/\D/g, '');
    setCardValue(value);

    const typeCard = getTypeCard(value);
    if (typeCard) {
      dispatch(setPaymentMethod(typeCard));
    }

  };

  return (
    <>

      <>
        <ProgressBar currentStep={3} />
      </>
      <section className="booking_container">
        <section>


          <h2>Select a payment method</h2>
          <section>
            {/* PayPal Payment */}
            <form className="payment">
              <input
                value={cardValue}
                checked={selectedMethod === 'PayPal'}
                onChange={() => handlePaymentMethodChange('PayPal')}
                style={{ height: '1em', width: '1em' }}
                type="radio" name="payment" />
              <h3>PayPal</h3>
              <p>You will be redirected to the PayPal website after submitting your order</p>
              <span>
                <Icon icon="logos:paypal"
                  alt="pay by paypal"
                />
              </span>

            </form>

            {/* Credit Card Payment */}
            <form className="payment_general">

              <section className="payment">
                <input
                  checked={selectedMethod === 'Card'}
                  onChange={() => handlePaymentMethodChange('card')}
                  style={{ height: '1em', width: '1em' }}
                  value={cardValue}
                  type="radio"
                  name="payment" />
                <span>
                  <h3>Pay with Credit Card</h3>
                </span>
                <section className="payment">
                  <span>
                    <Icon icon="logos:visa"
                      alt="pay by visa"
                    />
                  </span>
                  <span>
                    <Icon icon="logos:discover"
                      alt="pay by discover"
                    />
                  </span>
                  <span>
                    <Icon icon="logos:maestro"
                      alt="pay by maestro"
                    />
                  </span>
                  <span>
                    <Icon icon="logos:mastercard"
                      alt="pay by mastercard"
                    />
                  </span>


                </section>
              </section>
              <section className="payment_card">
                <fieldset>
                  <legend>Card number</legend>
                  <input
                    type="number"
                    value={cardValue}
                    onChange={handleInputChange}
                    placeholder="1234 5678 9012 3456" />
                </fieldset>
                <fieldset>
                  <legend>Expiration Date</legend>
                  <input placeholder="MM/YY" />
                </fieldset>
                <fieldset>
                  <legend>Card Security Code</legend>
                  <input type="password" />
                </fieldset>
                <p style={{ color: "#FA8B02" }}>What is this?</p>
              </section>
            </form>
          </section>
        </section>

        {/* Ticket Overview */}
        <TicketOverview
          // onNext={() => dispatch(setTicketData(ticket))}
          nextLink={'/OrderCompleted'}
        />
      </section>
    </>
  );
}


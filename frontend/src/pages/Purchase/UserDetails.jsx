import React from "react";
import axios from "axios";
import ProgressBar from "../../components/ProgressBar";
import { useDispatch, useSelector } from "react-redux";
import TicketOverview from "../../components/TicketOverview";
import {setPhone, setEmail, setName,setSurname } from "../../slices/authSlice";

export default function UserDetails () {

const dispatch = useDispatch();

const name = useSelector((state)=> state.auth.name);
const surname = useSelector((state)=> state.auth.surname);
const email  = useSelector((state)=> state.auth.email);
const phone = useSelector((state)=> state.auth.phone);

const UserData = {name,surname,email,phone};

const handleSubmit = async(e) => {       
    e.preventDefault();

  try {
    const response = await axios.post('http://localhost:3000/booking/user', UserData);
    if (response.status === 200) {
      console.log('User data was successfully sent');
    }
  } catch (error) {
    alert('Check your data, it is not valid');
  }
    }
    
    return( 
        <>
        
    <ProgressBar />
    <section className="booking_container">
    
            <section className="user_details">        
            <h2>Who shall we send these tickets to?</h2>
            <form onSubmit={handleSubmit}>
                <section className="user-container">
                   <section className="user_details">
                     <label htmlFor="username">Name</label>
                        <input 
                        name='username'
                        value={name}
                        onChange={(e)=>dispatch(setName(e.target.value))}
                        placeholder="Enter your name"/>
                   </section>
                    <section className="user_details">
                        <label htmlFor="surname">Surname</label>
                        <input
                         name="surname"
                         value={surname}
                         onChange={(e)=> dispatch(setSurname(e.target.value))} 
                         placeholder="Enter your surname"/>
                    </section>
                        
                    <section className="user_details">
                        <label htmlFor="phone">Telephone Number</label>
                        <input name='phone' 
                        type="tel"
                        value={phone}
                        onChange={(e)=> dispatch(setPhone(e.target.value))}
                        placeholder="Enter your telephone number "/>
                    </section>
                       
                    <section className="user_details">
                        <label htmlFor='email'>Email Adress</label>
                        <input 
                        type="email"
                        value={email}
                        onChange={(e)=>dispatch(setEmail(e.target.value))}
                        name='email' placeholder="Enter your email adress"
                        />
                    </section>
                        
                </section>
            </form>
            </section>
                <TicketOverview
                nextLink={'/Payment'}
                />
    </section>
    </>
    )
}

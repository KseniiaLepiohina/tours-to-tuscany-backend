import React,{useState} from "react";
// import { MapContainer,TileLayer,Marker, Popup } from 'react-leaflet';
// import "leaflet/dist/leaflet.css";
import { Icon } from "@iconify/react/dist/iconify.js";


export default function ContactUs() {
  const [email,setEmail] = useState('');
const [username,setUsername] = useState('');
const [message,setMessage] = useState('');



  return (
<section> 
  <section className="contact-container">
    <section className="contact_touch" >
        <h1> Get In Touch!</h1>
          <p> Fill up the form and our Team will get back to you within 24 hours.</p>
            
            <button>
              <span>
                <Icon Icon="ci:location" color="#FA8B02" height="1.5em" width="1.5em" alt="Piazza Napoleone"/>
              </span>
               <p>Piazza Napoleone, Lucca, Tuscany</p>
               </button>
            <button> 
              <span>
                <Icon icon="clarity:phone-handset-solid"
                  color="#FA8B02" 
                  height="1.5em"
                   width="1.5em" 
                   alt="call to us"
                   />
              </span>
               <p>	+39 346 368 5708</p></button>
            <button>
              <span>
                <Icon icon="fluent:mail-16-filled"
                color="#FA8B02" 
                height="1.5em" 
                width="1.5em"
                alt="send to us"
                />
              </span>
              <p>	italiainlimo@gmail.com</p>
            </button>
    </section>
      <form 
      className="Contact-form"
      method="post"
      >
       <label htmlFor="username"> <h4>Name and Surname</h4></label>
          <input 
          name="username" 
          onChange={(e)=> setUsername(e.target.value)}
          placeholder="Enter your name and surname" /> 
        <label htmlFor="email"><h4>Email Address</h4></label>
          <input
          name="email"
          type="email" 
          onChange={(e)=> setEmail(e.target.value)}
          placeholder="Enter your email address"/> 
        <label 
        htmlFor="textarea"
        name="textarea"><h4>Message</h4></label>
          <textarea 
          rows={9}
          cols={50}
          name="textarea"        
        onChange={(e)=>setMessage(e.target.value)}
          placeholder="Enter your message"/>
            <button className="general_btn" type="submit" >
              <span>Send Message</span> 
            </button>  
        </form>        
</section>

  {/* <div id="map">
      <MapContainer center={[43.002612627161284, 12.38475051382631]} zoom={5} scrollWheelZoom={true} style={{ height: "400px", width: "100%" }}>
      <TileLayer
        url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
        attribution='&copy; <a href="https://www.carto.com/attributions">CartoDB</a>'
      />
      
      <Marker position={[43.56469, 11.02011]}>
        <Popup>
         Tuscany
        </Popup>
      </Marker>

      <Marker position={[43.84373723290542,10.516281148313121]}>
        <Popup>
         Lucca
        </Popup>
      </Marker>

      <Marker position={[43.32363389973403,11.331457027370416]}>
        <Popup>
        Sienna
        </Popup>
      </Marker>

      {/* <Marker position={[45.43931,10.97976]}>
        <Popup>
          Verona
        </Popup>
      </Marker> */}
{/* 
      <Marker position={[43.72034,10.40444]}>
        <Popup>
          Pisa
        </Popup>
      </Marker>

      <Marker position={[43.77656,11.26965]}>
        <Popup>
          Florence
        </Popup>
      </Marker>

    </MapContainer>
  </div>  */}
  
</section>
  );
}
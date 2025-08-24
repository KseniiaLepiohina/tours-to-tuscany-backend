// import React from "react";
// import date from '../assets/home/icons/Tours/date.svg';
// import time from '../assets/home/icons/Tours/time_clr.svg';
// import group from '../assets/home/icons/Tours/group_col.svg';
// import duration from '../assets/home/icons/Tours/duration.svg';
// import location from '../assets/home/icons/Footer/location.svg';
// import guide from '../assets/home/icons/guide.svg';
// import lang from '../assets/home/icons/Tours/language.svg';
// import fees from '../assets/home/icons/Tours/ticket.svg';
// import transport from '../assets/home/icons/Tours/transport.svg';
// import { useDispatch, useSelector } from "react-redux";
// import { setTitle, setImg, setNumberOfPeople, setTransport } from '../slices/panelSlice'

// export default function Search() {

// 	const dispatch = useDispatch();
// 	// const setImg = useSelector((state)=> state.tour.img)
// 	// const setTitle = useSelector((state)=> state.tour.title);
// 	const setDate = useSelector((state) => state.datepicker.selectedDate);
// 	const setTime = useSelector((state) => state.datepicker.selectedTime);

// 	const img = useSelector((state) => state.panel.selectedTour);
// 	const title = useSelector((state) => state.panel.title);
// 	const numberOfPeople = useSelector((state) => state.panel.numberOfPeople);
// 	const transport = useSelector((state) => state.panel.transport);


// 	return (
// 		<>
// 			<h1>Search Results</h1>
// 			<section style={{ display: 'flex' }}>
// 				<img
// 					style={{ border: '1.5em' }}
// 					src={selectedTour.img} alt="Img's tour" />

// 				<section style={{ display: 'flex', gap: '2em' }} >
// 					<h2>{title}</h2>
// 					<section style={{ display: 'flex', gap: '6.25em' }}>
// 						<section style={{ display: 'flex', flexDirection: 'column', gap: '1.25em' }}>
// 							<section className='detail'>
// 								<img src={date} alt='tour date' />
// 								<h3>Date:{setDate} </h3>
// 							</section>
// 							<section className='detail'>
// 								<img src={time} alt='tour time' />
// 								<h3>Time:{setTime} </h3>
// 							</section>
// 							<section className='detail'>
// 								<img src={group} alt='number of people in the group' />
// 								<h3>Number of group:{numberOfPeople} </h3>
// 							</section>
// 							<section className='detail'>
// 								<img src={transport} alt='available transport' />
// 								<h3>Transportation:{setTransport}</h3>
// 							</section>
// 						</section>

// 						<section style={{ display: 'flex', flexDirection: 'column', gap: '2.125em' }} >

// 							<section style={{ display: 'flex', flexDirection: 'column', gap: '1.25em' }}>
// 								<button style={{ color: '#FA8B02', border: '#FA8B02 3.125em' }}>View Tour</button>
// 								<button className="general_btn "> Book Now</button>
// 							</section>
// 						</section>
// 					</section>
// 				</section>
// 			</section>
// 		</>
// 	)
// }
// {/* <section style={{display:'flex',gap:'1em'}}>
// 													<p style={{color:'#333333'}}>from</p><h2>{tourPrice} €</h2>
// 											</section> */}
// {/* <section style={{display:'flex',flexDirection:'column',gap:'1.25em'}} >
// 									<section className='detail'>
// 										<img src={duration} alt='trip duration'/>
// 											<h3><strong>Duration:{durationTour}</strong> </h3>
// 								</section>
// 								<section className='detail'>
// 									<img src={guide} alt='guide'/>
// 									<h3>Guide service:{guide}</h3>
// 								</section>
// 								<section className='detail'>
// 									<img src={lang} alt='language tour'/>
// 									<h3>Language:{language}</h3>
// 								</section>
// 									<section className='detail'>
// 									<img src={fees} alt='entry fee'/>
// 									<h3>Entry Fees: {tourFees}</h3>
// 								</section>
// 								</section>  */}
// import React from "react";
// import { useSelector } from "react-redux";
// import dateIcon from '../assets/home/icons/Tours/date.svg';
// import timeIcon from '../assets/home/icons/Tours/time_clr.svg';
// import groupIcon from '../assets/home/icons/Tours/group_col.svg';
// import durationIcon from '../assets/home/icons/Tours/duration.svg';
// import locationIcon from '../assets/home/icons/Footer/location.svg';
// import guideIcon from '../assets/home/icons/guide.svg';
// import langIcon from '../assets/home/icons/Tours/language.svg';
// import feesIcon from '../assets/home/icons/Tours/ticket.svg';
// import transportIcon from '../assets/home/icons/Tours/transport.svg';

// export default function Search() {
//   const selectedTour = useSelector((state) => state.panel.selectedTour);
//   const date = useSelector((state) => state.datepicker.selectedDate);
//   const time = useSelector((state) => state.datepicker.selectedTime);
//   const numberOfPeople = useSelector((state) => state.panel.numberOfPeople);
//   const transport = useSelector((state) => state.panel.transport);

//   if (!selectedTour) {
//     return <p>No tour selected</p>; // захист від помилок
//   }

//   return (
//     <>
//       <h1>Search Results</h1>
//       <section style={{ display: 'flex' }}>
//         <img
//           style={{ border: '1.5em' }}
//           src={selectedTour.img}
//           alt="Tour"
//         />

//         <section style={{ display: 'flex', gap: '2em' }}>
//           <h2>{selectedTour.title}</h2>
//           <section style={{ display: 'flex', gap: '6.25em' }}>
//             <section style={{ display: 'flex', flexDirection: 'column', gap: '1.25em' }}>
//               <section className='detail'>
//                 <img src={dateIcon} alt='tour date' />
//                 <h3>Date: {date}</h3>
//               </section>
//               <section className='detail'>
//                 <img src={timeIcon} alt='tour time' />
//                 <h3>Time: {time}</h3>
//               </section>
//               <section className='detail'>
//                 <img src={groupIcon} alt='group' />
//                 <h3>Group size: {numberOfPeople}</h3>
//               </section>
//               <section className='detail'>
//                 <img src={transportIcon} alt='transport' />
//                 <h3>Transport: {transport}</h3>
//               </section>
//               <section className='detail'>
//                 <img src={durationIcon} alt='duration' />
//                 <h3>Duration: {selectedTour.duration}</h3>
//               </section>
//               <section className='detail'>
//                 <img src={guideIcon} alt='guide' />
//                 <h3>Guide: {selectedTour.guide}</h3>
//               </section>
//               <section className='detail'>
//                 <img src={langIcon} alt='language' />
//                 <h3>Language: {selectedTour.language}</h3>
//               </section>
//               <section className='detail'>
//                 <img src={feesIcon} alt='fees' />
//                 <h3>Fees: {selectedTour.fees}</h3>
//               </section>
//             </section>

//             <section style={{ display: 'flex', flexDirection: 'column', gap: '2.125em' }}>
//               <section style={{ display: 'flex', gap: '1em' }}>
//                 <p style={{ color: '#333333' }}>from</p>
//                 <h2>{selectedTour.adultPrice} €</h2>
//               </section>
//               <section style={{ display: 'flex', flexDirection: 'column', gap: '1.25em' }}>
//                 <button style={{ color: '#FA8B02', border: '#FA8B02 3.125em' }}>View Tour</button>
//                 <button className="general_btn">Book Now</button>
//               </section>
//             </section>
//           </section>
//         </section>
//       </section>
//     </>
//   );
// }
// import React from "react";
// import { useSelector } from "react-redux";
// import dateIcon from '../assets/home/icons/Tours/date.svg';
// import timeIcon from '../assets/home/icons/Tours/time_clr.svg';
// import groupIcon from '../assets/home/icons/Tours/group_col.svg';
// import durationIcon from '../assets/home/icons/Tours/duration.svg';
// import guideIcon from '../assets/home/icons/guide.svg';
// import langIcon from '../assets/home/icons/Tours/language.svg';
// import feesIcon from '../assets/home/icons/Tours/ticket.svg';
// import transportIcon from '../assets/home/icons/Tours/transport.svg';

// export default function Search() {
//   const selectedTour = useSelector((state) => state.panel.selectedTour);
//   const date = useSelector((state) => state.datepicker.selectedDate);
//   const time = useSelector((state) => state.datepicker.selectedTime);
//   const numberOfPeople = useSelector((state) => state.panel.numberOfPeople);
//   const transport = useSelector((state) => state.panel.transport);

//   if (!selectedTour) {
//     return <p>No tour selected. Please search again.</p>;
//   }

//   return (
//     <>
//       <h1>Search Results</h1>
//       <section style={{ display: 'flex' }}>
//         <img
//           style={{ border: '1.5em' }}
//           src={selectedTour.img}
//           alt="Tour image"
//         />
//         <section style={{ display: 'flex', gap: '2em' }}>
//           <h2>{selectedTour.title}</h2>
//           <section style={{ display: 'flex', gap: '6.25em' }}>
//             <section style={{ display: 'flex', flexDirection: 'column', gap: '1.25em' }}>
//               <section className='detail'>
//                 <img src={dateIcon} alt='tour date' />
//                 <h3>Date: {date}</h3>
//               </section>
//               <section className='detail'>
//                 <img src={timeIcon} alt='tour time' />
//                 <h3>Time: {time}</h3>
//               </section>
//               <section className='detail'>
//                 <img src={groupIcon} alt='number of people' />
//                 <h3>Group size: {numberOfPeople}</h3>
//               </section>
//               <section className='detail'>
//                 <img src={transportIcon} alt='transport' />
//                 <h3>Transport: {transport}</h3>
//               </section>
//               <section className='detail'>
//                 <img src={durationIcon} alt='duration' />
//                 <h3>Duration: {selectedTour.duration}</h3>
//               </section>
//               <section className='detail'>
//                 <img src={guideIcon} alt='guide' />
//                 <h3>Guide: {selectedTour.guide}</h3>
//               </section>
//               <section className='detail'>
//                 <img src={langIcon} alt='language' />
//                 <h3>Language: {selectedTour.language}</h3>
//               </section>
//               <section className='detail'>
//                 <img src={feesIcon} alt='fees' />
//                 <h3>Entry Fees: {selectedTour.fees}</h3>
//               </section>
//             </section>
//             <section style={{ display: 'flex', flexDirection: 'column', gap: '2.125em' }}>
//               <section style={{ display: 'flex', gap: '1em' }}>
//                 <p style={{ color: '#333' }}>from</p>
//                 <h2>{selectedTour.adultPrice} €</h2>
//               </section>
//               <section style={{ display: 'flex', flexDirection: 'column', gap: '1.25em' }}>
//                 <button style={{ color: '#FA8B02', border: '#FA8B02 3.125em' }}>View Tour</button>
//                 <button className="general_btn">Book Now</button>
//               </section>
//             </section>
//           </section>
//         </section>
//       </section>
//     </>
//   );
// }
import React from "react";
import { useSelector } from "react-redux";
import dateIcon from "../assets/home/icons/Tours/date.svg";
import timeIcon from "../assets/home/icons/Tours/time_clr.svg";
import groupIcon from "../assets/home/icons/Tours/group_col.svg";
import transportIcon from "../assets/home/icons/Tours/transport.svg";
import durationIcon from "../assets/home/icons/Tours/duration.svg";
import guideIcon from "../assets/home/icons/guide.svg";
import langIcon from "../assets/home/icons/Tours/language.svg";
import feesIcon from "../assets/home/icons/Tours/ticket.svg";

export default function Search() {
  const selectedTour = useSelector((state) => state.panel.selectedTour);
  const selectedDate = useSelector((state) => state.datepicker.selectedDate);
  const selectedTime = useSelector((state) => state.datepicker.selectedTime);

  if (!selectedTour) {
    return <h2>No tour selected</h2>;
  }

  const {
    img,
    title,
    numberOfPeople,
    transport,
    duration,
    guide,
    language,
    fees,
    adultPrice,
  } = selectedTour;

  return (
    <>
      <h1>Search Results</h1>
      <section style={{ display: "flex", gap: "2rem" }}>
        <img
          src={img}
          alt={title}
          style={{ width: "400px", borderRadius: "1em", objectFit: "cover" }}
        />

        <section style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
          <h2>{title}</h2>

          <section className="detail">
            <img src={dateIcon} alt="Date" />
            <h3>Date: {selectedDate || "Not selected"}</h3>
          </section>

          <section className="detail">
            <img src={timeIcon} alt="Time" />
            <h3>Time: {selectedTime || "Not selected"}</h3>
          </section>

          <section className="detail">
            <img src={groupIcon} alt="Group" />
            <h3>Group Size: {numberOfPeople || "Not specified"}</h3>
          </section>

          <section className="detail">
            <img src={transportIcon} alt="Transport" />
            <h3>Transport: {transport || "Not specified"}</h3>
          </section>

          {duration && (
            <section className="detail">
              <img src={durationIcon} alt="Duration" />
              <h3>Duration: {duration}</h3>
            </section>
          )}

          {guide && (
            <section className="detail">
              <img src={guideIcon} alt="Guide" />
              <h3>Guide Service: {guide}</h3>
            </section>
          )}

          {language && (
            <section className="detail">
              <img src={langIcon} alt="Language" />
              <h3>Language: {language}</h3>
            </section>
          )}

          {fees && (
            <section className="detail">
              <img src={feesIcon} alt="Fees" />
              <h3>Entry Fees: {fees}</h3>
            </section>
          )}

          <section style={{ display: "flex", gap: "1rem", alignItems: "center" }}>
            <p style={{ color: "#333333" }}>from</p>
            <h2>{adultPrice ? `${adultPrice} €` : "N/A"}</h2>
          </section>

          <section style={{ display: "flex", gap: "1rem" }}>
            <button style={{ color: "#FA8B02", border: "2px solid #FA8B02" }}>
              View Tour
            </button>
            <button className="general_btn">Book Now</button>
          </section>
        </section>
      </section>
    </>
  );
}

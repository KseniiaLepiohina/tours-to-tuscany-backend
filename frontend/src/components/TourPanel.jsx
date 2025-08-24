// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import ppl from "../assets/home/icons/Tours/groups.svg";
// import clndr from "../assets/home/icons/Tours/date.svg";
// import time from "../assets/home/icons/Tours/time.svg";
// import tour from "../assets/home/icons/Tours/tour.svg";
// import tran from "../assets/home/icons/Tours/transport.svg";
// import search from "../assets/home/icons/Tours/zoom.svg";
// import DatePicker from "../Picker/DatePicker.jsx";
// import TimePicker from "../Picker/TimePicker.jsx";
// import PubTours from "../assets/home/icons/Tours/publicTours.svg";
// import PrivTours from "../assets/home/icons/Tours/privateTours.svg";
// import { setTitle, setImg, setNumberOfPeople, setTransport, findTours, setSelectedTour } from "../slices/panelSlice.js";
// import { setDate, setTime } from "../slices/dateSlice.js";
// import { useDispatch, useSelector } from "react-redux";

// export default function TourPanel() {
//   const [open, setOpen] = useState(false);
//   const dispatch = useDispatch();

//   const handleViewTour  = ()=> {
//     const tours = useSelector((state)=> state.panel.publicTours);
//     const selected = tours.find(t=> t.title === title);
//     dispatch(setSelectedTour(selected))
//   }

//   return (
//     <section className="tour_main">
//       <section className="btns">
//         <section className="btns_tour ">
//           <button className="public">
//             <img src={PubTours} alt="Choose a public tour" />
//             Public Tours
//           </button>
//         </section>
//         <section className="btns_tour">
//           <button className="private ">
//             <img src={PrivTours} alt="choose a private tour" />
//             Private Tours
//           </button>
//         </section>
//       </section>

//       <section className="tour_panel">
//         <section className="publicTour">
//           <section className="search-container">
//             <NumberOfPeople />
//             <ChooseDate />
//             <SelectTime />
//             <SelectTour />
//             <SelectTransportation />
//             <Link to="/search">
//               <button
//                 onClick={() => dispatch(findTours())}
//                 className="general_btn">

//                 <img src={search} alt="search your tours" />
//               </button>
//             </Link>
//           </section>
//         </section>
//         <section className="privateTour">
//           <ChooseDate />
//           <SelectTime />
//           <SelectTour />
//           <SelectTransportation />
//           <Link to="/search">
//             <button
//               onClick={() => dispatch(findTours())}
//               className="general_btn">
//               <img src={search} alt="search your tours" />
//             </button>
//           </Link>
//         </section>
//       </section>
//     </section>
//   );
// }

// export const NumberOfPeople = () => {
//   const dispatch = useDispatch();
//   return (
//     <section className="searchItem">
//       <img src={ppl} alt="Choose a  number of  tour's people" />
//       <section>
//         <span>Number of people</span>
//         <select onChange={(e) => dispatch(setNumberOfPeople(e.target.value))}>
//           <option>Choose number</option>
//           <option value="5-10">5-10</option>
//           <option value="10-50">10-50</option>
//           <option value="5-12">5-12</option>
//         </select>
//       </section>
//     </section>
//   );
// };

// export const ChooseDate = () => {
//   const dispatch = useDispatch();
//   return (
//     <section className="searchItem">
//       <img src={clndr} alt="choose a tour's date" />
//       <section className="custom_container">
//         <span>Date</span>
//         <select onChange={(e) => dispatch(setDate(e.target.value))}>
//           <option>
//             Selected Date
//             <section><DatePicker
//               onChange={(date) => dispatch(setDate(date))}
//             />

//             </section>
//           </option>
//         </select>
//       </section>
//     </section>
//   );
// };

// export const SelectTime = () => {
//   return (
//     <section className="searchItem">
//       <img src={time} alt="choose a tour time" />
//       <section>
//         <span>Time</span>
//         <TimePicker
//           setTime={setTime}
//         />
//       </section>
//     </section>
//   );
// };
// export const SelectTour = () => {
//   const dispatch = useDispatch();
//   return (
//     <section className="searchItem">
//       <img src={tour} alt="choose a specific tour" />
//       <section className="custom_container">
//         <span>Tour</span>
//         <select onChange={(e) => dispatch(setTitle(e.target.value))}>
//           <option value="Lucca Bike Tour">Lucca Bike Tour</option>
//           <option value="Cinque Terre Tour">Cinque Terre Tour</option>
//           <option value="Sienna and Surroundings">
//             Sienna and Surroundings
//           </option>
//           <option value="Tour of the Lucaa Hills">
//             Tour of the Lucaa Hills
//           </option>
//           <option value="Pisa">Pisa</option>
//           <option value="Florence">Florence</option>
//           <option value="Wine tasting in Tuscany">
//             Wine tasting in Tuscany
//           </option>
//         </select>
//       </section>
//     </section>
//   );
// };

// export const SelectTransportation = () => {
//   const dispatch = useDispatch();
//   return (
//     <section className="searchItem">
//       <img src={tran} alt="choose a tour's transport" />
//       <section className="custom_container">
//         <span>Transportation</span>
//         <select onChange={(e) => dispatch(setTransport(e.target.value))}>
//           <option value="">Select transport</option>
//           <option value="Minivan and Bus">Minivan and Bus</option>
//           <option value="Transfers & NCC">Transfers & NCC</option>
//         </select>
//       </section>
//     </section>
//   );
// };

// // import React, { useState } from "react";
// // import { useNavigate } from "react-router-dom";
// // import { useDispatch, useSelector } from "react-redux";
// // import {
// //   setNumberOfPeople,
// //   setTitle,
// //   setTransport,
// //   setSelectedTour,
// //   findTours,
// // } from "../slices/panelSlice";
// // import { setDate, setTime } from "../slices/dateSlice";

// // import ppl from "../assets/home/icons/Tours/groups.svg";
// // import clndr from "../assets/home/icons/Tours/date.svg";
// // import timeIcon from "../assets/home/icons/Tours/time.svg";
// // import tour from "../assets/home/icons/Tours/tour.svg";
// // import tran from "../assets/home/icons/Tours/transport.svg";
// // import search from "../assets/home/icons/Tours/zoom.svg";
// // import PubTours from "../assets/home/icons/Tours/publicTours.svg";
// // import PrivTours from "../assets/home/icons/Tours/privateTours.svg";

// // import DatePicker from "../Picker/DatePicker";
// // import TimePicker from "../Picker/TimePicker";

// // export default function TourPanel() {
// //   const dispatch = useDispatch();
// //   const navigate = useNavigate();
// //   const [open, setOpen] = useState(false);

// //   // Отримуємо потрібні значення зі store
// //   const numberOfPeople = useSelector((state) => state.panel.numberOfPeople);
// //   const transport = useSelector((state) => state.panel.transport);
// //   const title = useSelector((state) => state.panel.title);

// //   const handleSearch = () => {
// //     dispatch(findTours()).then((res) => {
// //       if (res.meta.requestStatus === "fulfilled") {
// //         const filtered = res.payload.filter((tour) =>
// //           (!numberOfPeople || tour.numberOfPeople === numberOfPeople) &&
// //           (!title || tour.title === title) &&
// //           (!transport || tour.transport === transport)
// //         );

// //         if (filtered.length > 0) {
// //           dispatch(setSelectedTour(filtered[0]));
// //           navigate("/search");
// //         } else {
// //           alert("No matching tours found");
// //         }
// //       }
// //     });
// //   };

// //   return (
// //     <section className="tour_main">
// //       <section className="btns">
// //         <button className="public">
// //           <img src={PubTours} alt="Public Tours" />
// //           Public Tours
// //         </button>
// //         <button className="private">
// //           <img src={PrivTours} alt="Private Tours" />
// //           Private Tours
// //         </button>
// //       </section>

// //       <section className="tour_panel">
// //         <section className="publicTour">
// //           <section className="search-container">
// //             <NumberOfPeople />
// //             <ChooseDate open={open} setOpen={setOpen} />
// //             <SelectTime />
// //             <SelectTour />
// //             <SelectTransportation />
// //             <button onClick={handleSearch} className="general_btn">
// //               <img src={search} alt="search" />
// //             </button>
// //           </section>
// //         </section>
// //       </section>
// //     </section>
// //   );
// // }

// // // ------- SUB COMPONENTS -------
// // export const Numb
// // erOfPeople = () => {
// //   const dispatch = useDispatch();
// //   const value = useSelector((state) => state.panel.numberOfPeople);
// //   return (
// //     <section className="searchItem">
// //       <img src={ppl} alt="People" />
// //       <span>Number of people</span>
// //       <select value={value || ""} onChange={(e) => dispatch(setNumberOfPeople(e.target.value))}>
// //         <option value="">Choose number</option>
// //         <option value="5-10">5-10</option>
// //         <option value="10-50">10-50</option>
// //         <option value="5-12">5-12</option>
// //       </select>
// //     </section>
// //   );
// // };

// // export const ChooseDate = ({ open, setOpen }) => {
// //   const dispatch = useDispatch();
// //   return (
// //     <section className="searchItem">
// //       <img src={clndr} alt="Calendar" />
// //       <span>Date</span>
// //       <button onClick={() => setOpen(!open)}>Select Date</button>
// //       {open && <DatePicker onChange={(date) => dispatch(setDate(date))} />}
// //     </section>
// //   );
// // };

// // export const SelectTime = () => {
// //   return (
// //     <section className="searchItem">
// //       <img src={timeIcon} alt="Time" />
// //       <span>Time</span>
// //       <TimePicker setTime={setTime} />
// //     </section>
// //   );
// // };

// // export const SelectTour = () => {
// //   const dispatch = useDispatch();
// //   // const value = useSelector((state) => state.panel.title);
// //   return (
// //     <section className="searchItem">
// //       <img src={tour} alt="Tour" />
// //       <span>Tour</span>
// //       <select value={value || ""} onChange={(e) => dispatch(setTitle(e.target.value))}>
// //         <option value="">Select tour</option>
// //         <option value="Lucca Bike Tour">Lucca Bike Tour</option>
// //         <option value="Cinque Terre Tour">Cinque Terre Tour</option>
// //         <option value="Sienna and Surroundings">Sienna and Surroundings</option>
// //         <option value="Tour of the Lucaa Hills">Tour of the Lucaa Hills</option>
// //         <option value="Pisa">Pisa</option>
// //         <option value="Florence">Florence</option>
// //         <option value="Wine tasting in Tuscany">Wine tasting in Tuscany</option>
// //       </select>
// //     </section>
// //   );
// // };

// // export const SelectTransportation = () => {
// //   const dispatch = useDispatch();
// //   // const value = useSelector((state) => state.panel.transport);
// //   return (
// //     <section className="searchItem">
// //       <img src={tran} alt="Transport" />
// //       <span>Transportation</span>
// //       <select value={value || ""} onChange={(e) => dispatch(setTransport(e.target.value))}>
// //         <option value="">Select transport</option>
// //         <option value="Minivan and Bus">Minivan and Bus</option>
// //         <option value="Transfers & NCC">Transfers & NCC</option>
// //       </select>
// //     </section>
// //   );
// // };

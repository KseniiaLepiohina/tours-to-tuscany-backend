// import { createAsyncThunk, createSlice, isRejectedWithValue } from "@reduxjs/toolkit";
// import axios from "axios";

// export const findTours = createAsyncThunk(
//   "tour/tours",
//   async (id, { isRejectedWithValue }) => {
//     try {
//       const response = await axios.get(`http://localhost:5000/tour/tours`);
//       return response.data
//     } catch (error) {
//       return isRejectedWithValue(error)
//     }
//   }
// )

// const tourPanelSlice = createSlice({
//   name: "panel",
//   initialState: {
//     id: null,
//     publicTours: [],
//     privateTours: [],
//     title: null,
//     img: null,
//     numberOfPeople: null,
//     transport: null,
//     filteredTours: [],
//     status: 'loading' || 'succeeded' || 'failed',
//     // isPrivate: Boolean,
//     selectedTour: null
//   },



//   reducers: {
//     setTitle: (state, action) => {
//       state.title = action.payload;
//     },
//     setImg: (state, action) => {
//       state.img = action.payload;
//     },
//     setNumberOfPeople: (state, action) => {
//       state.numberOfPeople = action.payload;
//     },
//     setTransport: (state, action) => {
//       state.transport = action.payload;
//     },
//     setSelectedTour: (state, action) => {
//       state.selectedTour = action.payload;
//     }

//   },
//   extraReducers: (builder) => {
//     builder
//       .addCase(findTours.pending, (state) => {
//         state.status = 'loading'
//       })
//       .addCase(findTours.fulfilled, (state, action) => {
//         state.status = 'succeeded'

//         const filtered = action.payload.filter((tour) =>
//           (state.numberOfPeople || tour.numberOfPeople === state.numberOfPeople) &&
//           (state.title || tour.title === state.title) &&
//           (state.transport || tour.transport === state.transport)
//         );

//         if (state.isPrivate) {
//           state.privateTours = filtered;
//         } else {
//           state.publicTours = filtered;
//         }

//         state.filteredTours = filtered;


//       })
//       .addCase(findTours.rejected, (state, action) => {
//         state.status = 'failed'
//       })
//   }

// })

// export const { setTitle, setImg, setNumberOfPeople, setTransport, setSelectedTour } = tourPanelSlice.actions;
// export default tourPanelSlice.reducer;
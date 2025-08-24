import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchTourById = createAsyncThunk(
  "tour/fetchTourById",
  async (id) => {
    try {
      const response = await axios.get(`http://localhost:5000/tour/tours/${id}`);
      return response.data;
    } catch (error) {
      return (error.response.data || error.message || "Something went wrong");
    }
  }
);

const tourById = createSlice({
  name: "tour",
  initialState: {
    ticketData: null,
    loading: null,
    error: null,

    adultValue: 0,
    totalAdultPrice: 0,

    childValue: 0,
    totalChildPrice: 0,

    infantValue: 0,
    totalInfantPrice: 0,

    totalPrice: 0,
    selectedDate: null,
    selectedTime: null,
    status: null,
    finallTicketData:'',
    // payment: "visa"|| "mastercard" || "paypal" ||"discover" ||"maestro",

    userTicket: null,
  },
  reducers: {
    // Adult
    setAdultValue: (state, action) => {
      state.adultValue = action.payload;
    },
    increaseAdultValue: (state, action) => {
      state.adultValue += action.payload;
    },
    decreaseAdultValue: (state, action) => {
      state.adultValue -= action.payload;
    },
    setTotalAdultPrice: (state) => {
      state.totalAdultPrice = state.ticketData.adultPrice * state.adultValue;
    },

    // Child
    setChildValue: (state, action) => {
      state.childValue = action.payload;
    },
    increaseChildValue: (state, action) => {
      state.childValue += action.payload;
    },
    decreaseChildValue: (state, action) => {
      state.childValue -= action.payload;
    },
    setTotalChildPrice: (state) => {
      state.totalChildPrice = state.ticketData.childPrice * state.childValue;
    },

    // Infant
    setInfantValue: (state, action) => {
      state.infantValue = action.payload;
    },
    increaseInfantValue: (state, action) => {
      state.infantValue += action.payload;
    },
    decreaseInfantValue: (state, action) => {
      state.infantValue -= action.payload;
    },
    setTotalInfantPrice: (state) => {
      state.totalInfantPrice = state.ticketData.infantPrice * state.infantValue;
    },

    // Total Price
    setTotalPrice: (state) => {
      state.totalPrice = state.totalAdultPrice + state.totalChildPrice + state.totalInfantPrice;
    },

    // Date and Time
    setSelectedDate: (state, action) => {
      state.selectedDate = action.payload;
    },
    setSelectedTime: (state, action) => {
      state.selectedTime = action.payload;
    },

    // Payment
    setPaymentMethod: (state, action) => {
      state.payment = action.payload;
    },

    // Store final ticket
    setUserTicket: (state) => {

      if (state.finallTicketData) {
        state.finallTicketData = {
         
        };
      }
    },
  },
extraReducers: (builder) => {
  builder
    .addCase(fetchTourById.pending, (state) => {
      state.loading = true;
      state.error = null;
    })
    .addCase(fetchTourById.fulfilled, (state, action) => {
      state.loading = false;
      state.ticketData = action.payload; 
    })
    .addCase(fetchTourById.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message || action.payload;
    });
}
});

export default tourById.reducer;

export const {
  setAdultValue,
  increaseAdultValue,
  decreaseAdultValue,
  setTotalAdultPrice,

  setChildValue,
  increaseChildValue,
  decreaseChildValue,
  setTotalChildPrice,

  setInfantValue,
  increaseInfantValue,
  decreaseInfantValue,
  setTotalInfantPrice,

  setTotalPrice,
  setPaymentMethod,
  setSelectedDate,
  setSelectedTime,
  setUserTicket,
} = tourById.actions;

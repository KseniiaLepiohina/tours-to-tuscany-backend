import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchTours = createAsyncThunk("tour/fetchTours", async () => {
  const response = await axios.get(`http://localhost:5000/tour/tours`);
  return response.data;
});

const fetchToursSlice = createSlice({
  name:'fetchAvaliableTours',
  initialState : {
    tours:[],
    loading:false,
    error:null,
  },
  reducers:{},
  extraReducers:(builder) => {
    builder
      .addCase(fetchTours.pending,(state)=> {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchTours.fulfilled,(state,action)=> {
        state.loading = false;
        state.tours = action.payload;
      })
      .addCase(fetchTours.rejected, (state,action)=> {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default fetchToursSlice.reducer;

import { configureStore } from '@reduxjs/toolkit'
import authReducer from './slices/authSlice';
import datepickerReducer from './slices/dateSlice';
import tourReducer from './slices/tourByIdSlice';
import fetchToursReducer from './slices/fetchTours';
import tourPanelReducer from './slices/panelSlice';
import paymentReducer from './slices/paymentSlice';

const store = configureStore({
    reducer: {
        auth: authReducer,
        datepicker: datepickerReducer,
        tour: tourReducer,
        fetchTours: fetchToursReducer,
        panel: tourPanelReducer,
        // payment: paymentReducer,
    },
});

export default store;
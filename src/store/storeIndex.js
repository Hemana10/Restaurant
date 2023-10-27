import { configureStore } from "@reduxjs/toolkit";

import { setRestaurantDetails, setErrorState, setLoadingState, restaurantReducer } from './slices/restaurantSlice';

const store = configureStore({
    reducer: {
        restaurantDetails: restaurantReducer
    }
});

export { store, setRestaurantDetails, setErrorState, setLoadingState };
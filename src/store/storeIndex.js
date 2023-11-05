import { configureStore } from "@reduxjs/toolkit";

import { setRestaurantDetails, setErrorState, setLoadingState,
    restaurantReducer, updateItemList } from './slices/restaurantSlice';

const store = configureStore({
    reducer: {
        restaurantDetails: restaurantReducer
    }
});

export { 
    store, 
    setRestaurantDetails, 
    setErrorState, 
    setLoadingState, 
    updateItemList 
};
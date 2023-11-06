import { configureStore } from "@reduxjs/toolkit";

import { setRestaurantDetails, setErrorState, setLoadingState,
    restaurantReducer } from './slices/restaurantSlice';
import { cartReducer } from './slices/cartSlice';
import { updateItemList } from './actions';

const store = configureStore({
    reducer: {
        restaurantDetails: restaurantReducer,
        cartDetails: cartReducer
    }
});

export { 
    store, 
    setRestaurantDetails, 
    setErrorState, 
    setLoadingState, 
    updateItemList
};
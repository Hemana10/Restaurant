import { configureStore } from "@reduxjs/toolkit";

import { setRestaurantDetails, setErrorState, setLoadingState,
    restaurantReducer } from './slices/restaurantSlice';
import { cartReducer } from './slices/cartSlice';
import { userReducer, setAuthDetails } from "./slices/userSlice";
import { paymentReducer, setPaymentStep } from "./slices/paymentSlice";
import { updateItemList } from './actions';

const store = configureStore({
    reducer: {
        restaurantDetails: restaurantReducer,
        cartDetails: cartReducer,
        authUserInfo: userReducer,
        paymentDetails: paymentReducer
    }
});

export { 
    store, 
    setRestaurantDetails, 
    setErrorState, 
    setLoadingState, 
    updateItemList,
    setAuthDetails,
    setPaymentStep
};
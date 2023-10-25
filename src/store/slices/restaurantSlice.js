import { createSlice } from "@reduxjs/toolkit";

const restaurantSlice = createSlice({
    name: 'restaurant',
    initialState: {
        restaurantDetails: {},
        loading: false,
        error: {
            errorStatus: false,
            errorMsg: ''
        }
    },
    reducers: {
        setRestaurantDetails(state, action) {
            state.loading = false;
            state.restaurantDetails = action.payload;
        },
        setErrorState(state, action) {
            state.loading = false;
            state.error = action;
        },
        setLoadingState(state, action) {
            state.loading = action;
        }
    }
});

export const { setRestaurantDetails, setErrorState, setLoadingState } = restaurantSlice.actions;
export const restaurantReducer = restaurantSlice.reducer;
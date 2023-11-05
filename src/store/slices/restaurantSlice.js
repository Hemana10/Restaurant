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
        },
        updateItemList(state, {payload: { menuIndex, categoryIndex, itemIndex, quantity }}) {
            if(categoryIndex) {
                state.restaurantDetails.menuDetails[menuIndex].card.card.categories[categoryIndex].itemCards[itemIndex].quantity = quantity;
            } else {
                state.restaurantDetails.menuDetails[menuIndex].card.card.itemCards[itemIndex].quantity = quantity;
            }
        }
    }
});

export const { 
    setRestaurantDetails,
    setErrorState, 
    setLoadingState,
    updateItemList } = restaurantSlice.actions;
export const restaurantReducer = restaurantSlice.reducer;
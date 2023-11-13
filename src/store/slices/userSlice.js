import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: 'user',
    initialState: {
        isAuth: false,
        userDetails: {}
    },
    reducers: {
        setAuthDetails(state, {payload: {authState, userDetails}}) {
           state.isAuth = authState;
           state.userDetails = userDetails;
        }
    }
});

export const { 
    setAuthDetails 
} = userSlice.actions;
export const userReducer = userSlice.reducer;
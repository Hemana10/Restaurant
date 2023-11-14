import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: 'user',
    initialState: {
        userDetails: null
    },
    reducers: {
        setAuthDetails(state, { payload }) {
            state.userDetails = payload;
        }
    }
});

export const {
    setAuthDetails
} = userSlice.actions;
export const userReducer = userSlice.reducer;
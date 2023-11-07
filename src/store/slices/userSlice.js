import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: 'user',
    initialState: {
        isAuth: false,
        userDeatils: {}
    },
    reducers: {
        setAuthState(state, action) {
           state.isAuth = action; 
        }
    }
});

export const { 
    setAuthState 
} = userSlice.actions;
export const userReducer = userSlice.reducer;
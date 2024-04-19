import { createSlice } from "@reduxjs/toolkit";

const paymentSlice = createSlice({
    name: 'payment',
    initialState: {
        paymentStep: 1
    },
    reducers: {
        setPaymentStep(state, { payload }) {
            state.paymentStep = payload;
        }
    }
});

export const { setPaymentStep } = paymentSlice.actions;
export const paymentReducer = paymentSlice.reducer;
import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        cartList: []
    },
    reducers: {
        setCartList(state, action) {
            state.cartList.push(...action.payload);
        }
    }
});

export const { setCartList } = cartSlice.actions;
export const cartReducer = cartSlice.reducer;
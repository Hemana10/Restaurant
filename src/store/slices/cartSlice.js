import { createSlice } from "@reduxjs/toolkit";

import { updateItemList } from '../actions';

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        cartList: []
    },
    reducers: {
        setCartList(state, action) {
            state.cartList.push(...action.payload);
        }
    },
    extraReducers(builder) {
        builder.addCase(updateItemList, (state, {payload: { item, quantity, id }}) => {
            const index = state.cartList.findIndex(cartItem => cartItem.card.info.id === id);
            if(quantity === 1) {
                state.cartList.push({...item, quantity});
            } else if(quantity === 0) {
                state.cartList.splice(index, 1);
            } else {
                state.cartList[index] = {...item, quantity};
            }
        })
    }
});

export const { setCartList } = cartSlice.actions;
export const cartReducer = cartSlice.reducer;
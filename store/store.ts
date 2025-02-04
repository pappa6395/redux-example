"use client"

import cartSlice from "@/slices/cartSlice";
import counterSlice from "@/slices/counterSlice";
import formSlice from "@/slices/formSlice";
import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
    reducer: {
        counter: counterSlice,
        cart: cartSlice,
        form: formSlice,
    }
})

export type RootState = ReturnType<typeof store.getState>; //root guide to Store
export type AppDispatch = typeof store.dispatch; // to update the reducer state

export default store;
import { createSlice, PayloadAction } from "@reduxjs/toolkit";



interface CartItem {
    id: number;
    title: string;
    price: number;
    image: string;
}

interface CartState {
    cartItems: CartItem[];
}

const initialState: CartState = {
    cartItems: [],
}

const initialCartItems =localStorage.getItem("cartItem");
if (initialCartItems) {
    initialState.cartItems = JSON.parse(initialCartItems);
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addProductToCart: (state, action: PayloadAction<CartItem>) => {  // cartItems = CartItem
            state.cartItems.push(action.payload);
        },
        removeProductFromCart: (state, action: PayloadAction<number>) => {    // id = number
            state.cartItems = state.cartItems.filter(
                (product) => product.id !== action.payload
            )
        },
    }
});

export const { addProductToCart, removeProductFromCart } = cartSlice.actions;
export default cartSlice.reducer;
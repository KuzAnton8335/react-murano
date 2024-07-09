import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	// state для открытия модального окна корзины
	isOpen: false,
	// state добавления данных в LocalStorage для корзины
	items: JSON.parse(localStorage.getItem("cartItems") || "[]"),
}

const cartSlice = createSlice({
	name: "cart",
	initialState,
	reducers: {
		toggleCart(state) {
			state.isOpen = !state.isOpen;
		},
		addItemToCart(state, action) {
			console.log(action);
		}
	}
})
export const { toggleCart, addItemToCart } = cartSlice.actions;
export default cartSlice.reducer
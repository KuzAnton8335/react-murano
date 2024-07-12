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
		// функция для открытия модального окна корзины
		toggleCart(state) {
			state.isOpen = !state.isOpen;
		},
		//  функция добавления данных в LocalStorage для корзины
		addItemToCart(state, action) {
			const { id, img, title, dateDelivery, price, count = 1 } = action.payload;
			const existingItem = state.items.find((item) => item.id === id);
			if (existingItem) {
				existingItem.count = count;
			} else {
				state.items.push({ id, img, title, dateDelivery, price, count });
			}
			localStorage.setItem("cartItems", JSON.stringify(state.items))
		}
	}
})
export const { toggleCart, addItemToCart } = cartSlice.actions;
export default cartSlice.reducer
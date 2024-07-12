import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";
import goodsReducer from "./goodsSlice";
import orderReducer from "./orderSlice";

const store = configureStore({
	reducer: {
		cart: cartReducer,
		order: orderReducer,
		goods: goodsReducer,
	},
})

export default store
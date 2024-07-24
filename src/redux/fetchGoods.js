import { createAsyncThunk } from '@reduxjs/toolkit';
import { API_URL } from '../../const';

export const fetchGoods = () => createAsyncThunk("goods/fetchGoods", async () => {
	const response = await fetch(`${API_URL}/api/products`);
	return await response.json();
})
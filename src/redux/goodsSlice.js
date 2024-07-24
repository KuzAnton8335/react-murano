import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	items: [],
	status: 'idle',
	error: null,
}
// !error extraReducers
const goodsSlice = createSlice({
	name: "goods",
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addCase(fetchGoods.pending, (state) => {
				state.status = 'loading';
			})
			.addCase(fetchGoods.fulfilled, (state, action) => {
				state.status = 'success';
				state.items = action.payload;
			})
			.addCase(fetchGoods.rejected, (state, action) => {
				state.status = 'failed';
				state.error = action.error.message;
			})
	},
});

export default goodsSlice.reducer
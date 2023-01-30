import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	value: [],
};
const handelFunc = (a, b) => {
	if (a.statusActive < b.statusActive) {
		return -1;
	} else if (a.statusActive > b.statusActive) {
		return 1;
	} else {
		return 0;
	}
};

export const counterSlice = createSlice({
	name: "counter",
	initialState,
	reducers: {
		increment: (state, action) => {
			state.value = action.payload;
		},
		decrement: (state) => {
			state.value = state.value.sort(handelFunc);
		},
		incrementByAmount: (state, action) => {
			state.value += action.payload;
		},
	},
});

export const { increment, decrement, incrementByAmount } = counterSlice.actions;

export default counterSlice.reducer;

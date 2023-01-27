import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./todos/todoSlice";

export const store = configureStore({
	reducer: {
		counter: counterReducer,
	},
});

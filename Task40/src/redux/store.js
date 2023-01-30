import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./slices/addTodoFormSlice";

export const store = configureStore({
	reducer: {
		counter: counterReducer,
	},
});

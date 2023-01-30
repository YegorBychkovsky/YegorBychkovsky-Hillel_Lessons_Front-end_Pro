import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	tasks: [],
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
	name: "tasks",
	initialState,
	reducers: {
		addTask: (state, action) => {
			state.tasks.unshift(action.payload);
		},
		changeState: (state, action) => {
			state.tasks.map((task) => {
				if (task.id === action.payload.id) {
					task.statusActive = !action.payload.status;
				}
			});
		},
		sortTasks: (state) => {
			state.tasks = state.tasks.sort(handelFunc);
		},
	},
});

export const { addTask, sortTasks, changeState } = counterSlice.actions;

export default counterSlice.reducer;

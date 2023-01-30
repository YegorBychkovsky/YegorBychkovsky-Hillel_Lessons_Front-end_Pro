import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { sortTasks } from "../redux/slices/addTodoFormSlice";

export const ToDoBlock = ({ title, addStatusFunc }) => {
	const dispatch = useDispatch();

	let [selected, setSelected] = useState(false);

	const handleChange = () => {
		addStatusFunc(selected);
		setSelected((value) => !value);
		dispatch(sortTasks());
	};
	return (
		<div className={"block"}>
			<input type="checkbox" onChange={handleChange} checked={selected} />
			<label className={"label"}>
				<h4 className={"title"}>{title}</h4>
			</label>
		</div>
	);
};

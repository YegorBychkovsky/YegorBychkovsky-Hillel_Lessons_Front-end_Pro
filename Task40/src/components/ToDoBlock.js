import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { decrement } from "../redux/todos/todoSlice";

export const ToDoBlock = ({ title, addStatusFunc }) => {
	const count = useSelector((state) => state.counter.value);
	const dispatch = useDispatch();

	let [selected, setSelected] = useState(false);

	const handleChange = () => {
		addStatusFunc(selected);
		setSelected((value) => !value);
		dispatch(decrement());
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

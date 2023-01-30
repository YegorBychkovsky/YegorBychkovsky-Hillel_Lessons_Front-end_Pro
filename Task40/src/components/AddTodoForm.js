import React, { useCallback, useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../redux/slices/addTodoFormSlice";

export const AddTodoForm = () => {
	const generateId = () => Math.random().toString(16).slice(2) + new Date().getTime().toString(36);
	const [inputValue, setInputValue] = useState("");
	const dispatch = useDispatch();
	const handlerButtonAdd = useCallback((title) => {
		dispatch(
			addTask({
				id: generateId(),
				title,
				statusActive: false,
			})
		);
		setInputValue("");
	});
	return (
		<div>
			<input
				className="newItem"
				value={inputValue}
				onChange={(event) => {
					setInputValue(event.target.value);
				}}
			></input>
			<button className="button" onClick={() => handlerButtonAdd(inputValue)} aria-label="Add">
				Add
			</button>
		</div>
	);
};

import React, { useCallback, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment } from "../redux/todos/todoSlice";

export const InputPlus = () => {
	const generateId = () => Math.random().toString(16).slice(2) + new Date().getTime().toString(36);
	const [inputValue, setInputValue] = useState("");
	const count = useSelector((state) => state.counter.value);
	const dispatch = useDispatch();
	const onAdd = useCallback((title) => {
		dispatch(
			increment([
				{
					id: generateId(),
					title,
					statusActive: false,
				},
				...count,
			])
		);
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
			<button
				className="button"
				onClick={() => {
					onAdd(inputValue);
					setInputValue("");
				}}
				aria-label="Add"
			>
				Add
			</button>
		</div>
	);
};

import "./App.css";
import { ToDoBlock } from "./components/ToDoBlock";
import { InputPlus } from "./components/inputPlus";

import { useSelector, useDispatch } from "react-redux";
import { increment } from "./redux/todos/todoSlice";

function App() {
	const count = useSelector((state) => state.counter.value);
	const dispatch = useDispatch();

	return (
		<main className="container">
			<h1>To do List</h1>
			<div className="input">
				<InputPlus />
			</div>
			<div className="titleSection">
				{count.map((task) => (
					<ToDoBlock
						key={task.id}
						title={task.title}
						addStatusFunc={(newStatus) => {
							dispatch(
								increment(
									count.map((item) =>
										item.id === task.id ? { ...task, statusActive: !newStatus } : item
									)
								)
							);
						}}
					/>
				))}
			</div>
		</main>
	);
}

export default App;

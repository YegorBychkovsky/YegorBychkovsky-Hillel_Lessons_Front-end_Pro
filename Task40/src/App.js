import "./App.css";
import { ToDoBlock } from "./components/ToDoBlock";
import { AddTodoForm } from "./components/AddTodoForm";

import { useSelector, useDispatch } from "react-redux";
import { changeState } from "./redux/slices/addTodoFormSlice";

function App() {
	const tasks = useSelector((state) => state.counter.tasks);
	const dispatch = useDispatch();

	return (
		<main className="container">
			<h1>To do List</h1>
			<div className="input">
				<AddTodoForm />
			</div>
			<div className="titleSection">
				{tasks.map((task) => (
					<ToDoBlock
						key={task.id}
						title={task.title}
						addStatusFunc={(newStatus) => {
							tasks.map((item) =>
								item.id === task.id
									? dispatch(changeState({ id: task.id, status: newStatus }))
									: item
							);
						}}
					/>
				))}
			</div>
		</main>
	);
}

export default App;

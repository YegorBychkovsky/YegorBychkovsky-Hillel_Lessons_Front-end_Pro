// import { React, useState } from "react";
// import "./App.css";
// import { Link } from "react-router-dom";
// import { DatePicker } from "antd";
// import { Table } from "antd";
// import axios from "axios";

// function App() {
// 	const columns = [
// 		{
// 			title: "ID",
// 			dataIndex: "id",
// 			key: "id",
// 		},
// 		{
// 			title: "Name",
// 			dataIndex: "name",
// 			key: "name",
// 		},
// 		{
// 			title: "Albums",
// 			dataIndex: "albums",
// 			key: "albums",
// 		},
// 	];

// 	const [users, setUsers] = useState([]);
// 	axios("https://jsonplaceholder.typicode.com/users").then((res) => {
// 		setUsers(res.data);
// 		// console.log(users);
// 	});
// 	return (
// 		<>
// 			<div className="wrapper">
// 				<Link to={"/albums"}>
// 					<button>albums</button>
// 				</Link>
// 			</div>
// 			<div className="header">
// 				<div className="top">ID</div>
// 				<div className="top">Name</div>
// 				<div className="top">Albums</div>
// 			</div>
// 			<Table
// 				columns={columns}
// 				dataSource={users}
// 				onClick={() => {
// 					console.log(3);
// 				}}
// 			/>
// 		</>
// 	);
// }
// export default App;

import { React, useState, useEffect } from "react";
import { Table } from "../components/Table";
import axios from "axios";

export const Users = ({}) => {
	const [users, setUsers] = useState([]);
	useEffect(() => {
		axios("https://jsonplaceholder.typicode.com/users").then((res) => {
			setUsers(res.data);
		});
	}, []);

	return <Table arr={users} way={`/`} sub={"Users"} />;
};

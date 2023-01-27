import { React, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Table } from "../components/Table";
import axios from "axios";

export const Albums = ({}) => {
	const { userId } = useParams();
	const [albums, setAlbums] = useState([]);
	useEffect(() => {
		axios(
			`https://jsonplaceholder.typicode.com/albums?userId=${userId}`
		).then((res) => {
			setAlbums(res.data);
		});
	}, [userId]);

	return <Table arr={albums} way={`/`} sub={"Albums"} />;
};

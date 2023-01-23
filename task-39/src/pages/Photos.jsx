import { React, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Table } from "../components/Table";
import axios from "axios";

export const Photos = ({}) => {
	const [photos, setPhotos] = useState([]);
	const { albumId } = useParams();
	useEffect(() => {
		axios(
			`https://jsonplaceholder.typicode.com/photos?albumId=${albumId}`
		).then((res) => {
			setPhotos(res.data);
		});
	}, [albumId]);

	return <Table arr={photos} way={`/`} sub={"Photos"} />;
};

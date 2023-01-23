import { React } from "react";
import { Link } from "react-router-dom";

export const Table = ({ arr, way, sub }) => {
	return (
		<div className="container">
			<table>
				<thead>
					{sub === "Users" ? (
						<tr>
							<th scope="col"> ID</th>
							<th scope="col">Name </th>
							<th scope="col"> Albums </th>
						</tr>
					) : sub === "Albums" ? (
						<tr>
							<th scope="col">User ID </th>
							<th scope="col"> Album ID</th>
							<th scope="col"> Title </th>
						</tr>
					) : (
						<tr>
							<th scope="col">Photo ID </th>
							<th scope="col"> Title</th>
							<th scope="col"> URL </th>
						</tr>
					)}
				</thead>
				<tbody>
					{arr.map((el) => {
						return sub === "Users" ? (
							<tr key={el.id}>
								<td>{el.id}</td>
								<td>{el.name}</td>
								<td>
									<Link to={`albums/${el.id}`}>Albums </Link>
								</td>
							</tr>
						) : sub === "Albums" ? (
							<tr key={el.id}>
								<td>{el.userId}</td>
								<td>{el.id}</td>
								<td>{el.title}</td>
								<td>
									<Link to={`photos/${el.id}`}>Photos</Link>
								</td>
							</tr>
						) : (
							<tr key={el.id}>
								<td>{el.id}</td>
								<td>{el.title}</td>
								<td>{el.url}</td>
							</tr>
						);
					})}
				</tbody>
			</table>
			<Link to={way}>
				<button>Users</button>
			</Link>
		</div>
	);
};

import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Users } from "./pages/Users";
import { Albums } from "./pages/Albums";
import { Photos } from "./pages/Photos";
import "@picocss/pico";

const router = createBrowserRouter([
	{
		path: "/",
		element: <Users />,
	},
	{
		path: "/albums/:userId",
		element: <Albums />,
	},
	{
		path: "/albums/:userId/photos/:albumId",
		element: <Photos />,
	},
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

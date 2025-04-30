import React from "react";
import {Route, Routes } from "react-router-dom";

import Login from "./login";
import HomeScreen from "../Screens/homeScreen";

function AppRoutes() {

	return (
		<Routes>
			<Route path="/" element={<Login />} />
			<Route
				path="/home"
				element={
						<HomeScreen />
				}
			/>
		</Routes>
	);
}

export default AppRoutes;

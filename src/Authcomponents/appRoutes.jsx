import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { useSelector } from "react-redux";

import Login from "./login";
import HomeScreen from "../Screens/homeScreen";

const PrivateRoute = ({ children }) => {
	const { savedData } = useSelector((state) => state.auth);

	return savedData?.email ? children : <Navigate to="/" />;
};

function AppRoutes() {

	return (
		<Routes>
			<Route path="/" element={<Login />} />
			<Route
				path="/home"
				element={
					// <PrivateRoute>
						<HomeScreen />
					// </PrivateRoute>
				}
			/>
		</Routes>
	);
}

export default AppRoutes;

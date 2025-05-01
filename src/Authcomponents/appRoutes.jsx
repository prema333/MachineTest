import React, { Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";

const Login = lazy(() => import("./login"));
const HomeScreen = lazy(() => import("../Screens/homeScreen"));

function AppRoutes() {
	return (
		<Suspense
			fallback={
				<div className="spinner-border" role="status">
					<span className="sr-only">Loading...</span>
				</div>
			}>
			<Routes>
				<Route path="/" element={<Login />} />
				<Route path="/home" element={<HomeScreen />} />
			</Routes>
		</Suspense>
	);
}

export default AppRoutes;

import React from "react";
import { BrowserRouter} from "react-router-dom";
import { Provider} from "react-redux";

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js"; 

import store from "./redux/store";
import AppRoutes from "./Authcomponents/appRoutes";


function App() {

	return (
		<>
			<Provider store={store}>
			<BrowserRouter>
				<AppRoutes />
			</BrowserRouter>
		</Provider>
		</>
	);
}

export default App;

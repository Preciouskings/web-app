import type { Component } from "solid-js";
import { Route, Router, Routes } from "@solidjs/router";
import HomePage from "./pages/home";

const App: Component = () => {
	return (
		<Router>
			<Routes>
				<Route path="/" component={HomePage} />
			</Routes>
		</Router>
	);
};

export default App;

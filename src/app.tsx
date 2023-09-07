import type { Component } from "solid-js";
import HomeeaseApi from "@homeease/api";
import { Zodios } from "@zodios/core";

const App: Component = () => {
	const client = new Zodios('http://localhost:5000/api', HomeeaseApi);
	console.log(client)

	return (
		<p class="text-4xl text-green-700 text-center py-20">Hello tailwind!</p>
	);
};

export default App;

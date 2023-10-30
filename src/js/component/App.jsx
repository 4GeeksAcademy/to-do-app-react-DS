import React, { useState } from "react";
import TodoList from "./TodoList";

const App = () => {

	return (
		<div className="to-do-container">
			<h1 className="title">To-do List</h1>
			<div className="to-do letter">
				{/* Notes To-do */}
				<TodoList />

				{/* Items left To-do */}
				<h6 className="items-left">5 item left</h6>
			</div>
		</div>
	);
};

export default App;

import React, { useState } from "react";

const App = () => {

	const [notes, setNotes] = useState();

	const addNotes = () => {

	}

	const deleteNotes = () => {
		
	}

	return (
		<div className="to-do-container">
			<h1 className="title">To-do List</h1>
			<div className="to-do letter">
				<input className="input-To-Do" type="text" placeholder="What needs to be done?"/>
				<div className="notes">
        			<div className="note">Hacer la cama</div>
					<div className="note">Quitar el polvo de la pieza</div>
					<div className="note">Cambiar las sábanas</div>
					<div className="note">Limpiar los muebles de la pieza</div>
					<div className="note">Lamentablemente todo lo de arriba si es real</div>
				</div>
			<h6 className="items-left">5 item left</h6>
			</div>
		</div>
	);
};

export default App;

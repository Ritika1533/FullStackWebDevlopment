import React, { useState } from "react";
import "./form.css";

function Form() {
	const [yourName, setyourName] = useState("");
	const inputEvent = (evt) => {
		let currName = evt.target.value;
		setyourName(currName);
	};
	const [fullName, setfullName] = useState("");
	const submitName = (evt) => {
		evt.preventDefault();
		setfullName(yourName);
	};
	return (
		<>
			<form onSubmit={submitName}>
				<div>
					<h1>Hello,{fullName}💩</h1>
					<input
						onChange={inputEvent}
						type="text"
						placeholder="can write anything"
						value={yourName}
					/>
					<button>click me</button>
				</div>
			</form>
		</>
	);
}

export default Form;

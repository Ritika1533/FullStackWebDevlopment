import React, { useState } from "react";
import "./date.css";

function Cdate() {
	const [ctime, setTime] = useState(new Date().toLocaleTimeString());
	const Increment = () => {
		const time = new Date().toLocaleTimeString();
		setTime(time);
	};
	return (
		<div className="click">
			<h1 className="heading">{ctime}</h1>
			<button onClick={Increment}>Click Me</button>
		</div>
	);
}

export default Cdate;

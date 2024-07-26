import React, { useState } from "react";
import "./event.css";
function Event() {
	let purple = "yellow";

	const [bg, setbg] = useState(purple);
	const [fname, setfname] = useState("Ritika");
	const bgChange = () => {
		let newbg = "#34495e";
		let sname = "Ritika Keshri";
		console.log("changed");
		setbg(newbg);
		setfname(sname);
	};
	const bgback = () => {
		let newbgb = "green";
		setbg(newbgb);
	};
	return (
		<div style={{ background: bg }}>
			<button onClick={bgChange} onDoubleClick={bgback}>
				{fname}
			</button>
		</div>
	);
}

export default Event;

import React, { useState } from "react";
import "./clock.css";
function Clock() {
	let time = new Date().toLocaleTimeString();
	const [ctime, settime] = useState(time);
	const updatetime = () => {
		let time = new Date().toLocaleTimeString();
		settime(time);
	};
	setInterval(updatetime, 1000);
	return (
		<>
			<div className="click">
				<h1 className="heading">{ctime}</h1>
			</div>
		</>
	);
}
export default Clock;

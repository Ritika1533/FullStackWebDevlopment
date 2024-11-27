import React from "react";
const time = new Date().getHours();
let color = "green";
function greet(time) {
	if (time >= 5 && time < 12) {
		color = "green";
		return "Good Morning";
	} else if (time >= 12 && time < 17) {
		color = "orange";
		return "Goog Afternoon";
	} else if (time >= 17 && time <= 21) {
		color = "blue";
		return "Good Evening";
	} else {
		color = "pink";
		return "Good night";
	}
}
function Greeting() {
	return (
		<>
			<h1 style={{ color: "red" }}>
				Hello Sir, <span style={{ color: color }}>{greet(time)}</span>
			</h1>
		</>
	);
}

export default Greeting;

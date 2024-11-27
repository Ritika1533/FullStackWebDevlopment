import React from "react";
const date = new Date().toLocaleDateString();
const time = new Date().toLocaleTimeString();
function CurrentDT() {
	return (
		<>
			<h1>DATE AND TIME</h1>
			<p>Today's Date is {date}</p>
			<p>Today's Current Time is {time}</p>
		</>
	);
}
export default CurrentDT;

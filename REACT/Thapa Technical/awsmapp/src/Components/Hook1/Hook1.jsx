import React, { useState } from "react";

function Hook1() {
	const [count, updateCount] = useState(0);

	const Increment = () => {
		updateCount((prevCount) => {
			console.log("clicked" + " " + (prevCount + 1));
			return prevCount + 1;
		});
	};

	return (
		<>
			<div className="click">
				<h1 className="heading">{count}</h1>
				<button onClick={Increment}>Click Me</button>
			</div>
		</>
	);
}

export default Hook1;

import React, { useState } from "react";

const fname = "Ritika";
const lname = "Keshri";

const Expression = () => {
	const [randomNumber, setRandomNumber] = useState(null);
	const generateRandom = () => {
		let number = Math.floor(Math.random() * 80) + 1;
		setRandomNumber(number);
	};
	return (
		<>
			<h1>
				My name is {fname} {lname}
			</h1>
			<p> This is my Random number {randomNumber}</p>
			<button onClick={generateRandom}>Click me</button>
		</>
	);
};

export default Expression;

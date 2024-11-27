import React from "react";
function sum(a, b) {
	return a + b;
}
function sub(a, b) {
	return a - b;
}
function multiplication(a, b) {
	return a * b;
}
function division(a, b) {
	return a / b;
}
function Calculator() {
	return (
		<>
			<ol>
				<li>the sum of two number is {sum(5, 8)}</li>
				<li>the sub of two number is {sub(78, 8)}</li>
				<li>the product of two number is {multiplication(4, 8)}</li>
				<li>the division of two number is {division(140, 20)}</li>
			</ol>
		</>
	);
}

export default Calculator;

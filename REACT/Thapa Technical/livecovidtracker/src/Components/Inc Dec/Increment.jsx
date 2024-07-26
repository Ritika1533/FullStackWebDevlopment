import React, { useState } from "react";
import "./Increment.css";
function Increment() {
	let num = 0;
	const [number, setnumber] = useState(num);
	const incre = () => {
		setnumber(number + 1);
	};
	const decre = () => {
		if (number > 0) {
			setnumber(number - 1);
		} else {
			setnumber(0);
		}
	};
	return (
		<>
			<div className="main_div">
				<div className="center_div">
					<h1>{number}</h1>
					<div className="btn_div">
						<button onClick={incre}>Inc</button>
						<button onClick={decre}>Dec</button>
					</div>
				</div>
			</div>
		</>
	);
}

export default Increment;

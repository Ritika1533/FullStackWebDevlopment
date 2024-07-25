import React from "react";
import "./index.css";
import SlotM from "./SlotM";
function App() {
	return (
		<>
			<h1 className="heading_style">
				🎰 Welcome to{" "}
				<span style={{ fontWeight: "bold", color: "blue" }}>
					SLOT MACHINE GAME 🎰
				</span>
				<div className="sloteMachine">
					<SlotM x="😁" y="😁" z="😁" />
					<SlotM x="😈" y="😴" z="🤑" />
					<SlotM x="🐸" y="🐸" z="🐸" />
					<SlotM x="🐸" y="🐸" z="🙉" />
				</div>
			</h1>
		</>
	);
}

export default App;

import React from "react";
import Type from "./Type";
import "./introtext.css";
export default function IntroText() {
	return (
		<div className="hero">
			<div
				className="content"
				style={{
					color: "blue",
					width: "50%",
					marginTop: "120px",
					padding: "30px",
					boxSizing: "border-box",
				}}
			>
				<h1 style={{ fontSize: "40px", marginBottom: "10px" }}>
					Hi, I am{" "}
					<strong className="main-name" style={{ color: "#6b495a" }}>
						Ritika{" "}
					</strong>
				</h1>
				<p style={{ fontSize: "40px" }}>
					<Type />
				</p>
			</div>
		</div>
	);
}

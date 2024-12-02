import React from "react";
import Type from "./Type";
import "./introtext.css";
import { FaTwitter } from "react-icons/fa";
import { FaGithub, FaLinkedin } from "react-icons/fa6";
export default function IntroText() {
	return (
		<div className="hero">
			<div>
				<img src="/ritika.jpeg" alt="Logo" />
			</div>
			<div
				className="content"
				style={{
					color: "blue",
					width: "50%",
					// marginTop: "-160px",
					boxSizing: "border-box",
					marginTop: "70px",
				}}
			>
				<h1 style={{ fontSize: "40px", marginBottom: "10px", color: "black" }}>
					Hi, I'm{" "}
					<strong className="main-name" style={{ color: " rgb(153, 22, 88)" }}>
						Ritika{" "}
					</strong>
				</h1>
				<p style={{ fontSize: "40px", color: "#6b495a" }}>
					<Type />
				</p>
				<p className="quote">
					"Creating seamless full stack experiences with passion."
				</p>

				<div className="social">
					<button style={{ border: "none" }}>
						<a href="https://x.com/KeshriRitika10" style={{ color: "black" }}>
							<FaTwitter size={30} />
						</a>
					</button>
					<button style={{ border: "none" }}>
						<a href="https://github.com/Ritika1533" style={{ color: "black" }}>
							<FaGithub size={30} />
						</a>
					</button>
					<button style={{ border: "none" }}>
						<a
							href="https://www.linkedin.com/in/ritika-keshri-310323279/"
							style={{ color: "black" }}
						>
							<FaLinkedin size={30} />
						</a>
					</button>
				</div>
			</div>
		</div>
	);
}

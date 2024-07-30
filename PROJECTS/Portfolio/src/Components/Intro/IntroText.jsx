import React from "react";
import Type from "./Type";
import "./introtext.css";
import { FaTwitter } from "react-icons/fa";
import { FaGithub, FaLinkedin } from "react-icons/fa6";
export default function IntroText() {
	return (
		<div className="hero">
			<div
				className="content"
				style={{
					color: "blue",
					width: "50%",
					marginTop: "-160px",
					boxSizing: "border-box",
				}}
			>
				<h1 style={{ fontSize: "40px", marginBottom: "10px" }}>
					Hi, I am{" "}
					<strong className="main-name" style={{ color: " rgb(153, 22, 88)" }}>
						Ritika{" "}
					</strong>
				</h1>
				<p style={{ fontSize: "40px" }}>
					<Type />
				</p>
				<p className="quote">
					"Building seamless experiences from front to back with a passion for
					<br />
					full stack development."
				</p>

				<div className="social">
					<button>
						<a href="https://x.com/KeshriRitika10">
							<FaTwitter size={40} />
						</a>
					</button>
					<button>
						<a href="https://github.com/Ritika1533">
							<FaGithub size={40} />
						</a>
					</button>
					<button>
						<a href="https://www.linkedin.com/in/ritika-keshri-310323279/">
							<FaLinkedin size={40} />
						</a>
					</button>
				</div>
			</div>
		</div>
	);
}

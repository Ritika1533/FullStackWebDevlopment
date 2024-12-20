import React from "react";
import "./aboutme.css";
const colorCss = {
	color: " rgb(153, 22, 88)",
	fontWeight: "600",
};
function Aboutme() {
	return (
		<>
			<div className="aboutme">
				<div className="about-content">
					<div className="about-content-hed">
						<h2 className="myself">
							A Bit <span style={colorCss}>About Me</span>
						</h2>
					</div>
					<div>
						<p>
							I'm{" "}
							<span
								style={{ color: " rgb(153, 22, 88)", fontWeight: "900" }}
								className="symbol"
							>
								Ritika Keshri
							</span>
							{"  "}, originally from Deoghar, Jharkhand. Currently, I'm
							residing in Kolkata, where I'm pursuing my graduation.
						</p>
						<p>
							Currently in the final year of a Bachelor of Technology in
							Computer Science and Engineering at Techno India University,
							maintaining a{" "}
							<span style={colorCss} className="symbol">
								{" "}
								CGPA of 8.43
							</span>{" "}
							, with graduation expected in 2025.
						</p>
						<p>
							Familiar with both <span style={colorCss}>Frontend</span>{" "}
							technologies, including{" "}
							<span style={colorCss} className="symbol">
								React.js{" "}
							</span>
							, and <span style={colorCss}>Backend </span> services, such as{" "}
							<span style={colorCss}>Node.js </span>
							with{" "}
							<span style={colorCss} className="symbol">
								Express.js.
							</span>
						</p>
						<p>
							<span style={colorCss}>Proficient in C++</span> with strong OOP
							and data structures knowledge, solving
							<span style={colorCss}> 300+</span> problems on{" "}
							<span style={colorCss}>LeetCode </span> and{" "}
							<span style={colorCss}> GFG.</span>
						</p>
						<p>
							Knowledgeable in <span style={colorCss}>MongoDB </span> and{" "}
							<span style={colorCss}> MySQL</span>, as well as{" "}
							<span style={colorCss}>Html, Css</span> and{" "}
							<span style={colorCss}> Javascript.</span>
							Familiar with <span style={colorCss}>Bootstrap </span> and{" "}
							<span style={colorCss}> Git.</span>
						</p>
						<p>
							Interested in{" "}
							<span style={colorCss} className="symbol">
								web technologies
							</span>
							,{" "}
							<span style={colorCss} className="symbol">
								AI
							</span>
							, and{" "}
							<span style={colorCss} className="symbol">
								innovative tech solutions.
							</span>
						</p>
						<p>
							<span style={colorCss}>Dedicated to continuous learning </span>
							and <span style={colorCss}> applying knowledge</span> to{" "}
							<span style={colorCss}>real-world problems.</span>
						</p>
					</div>
				</div>
			</div>
		</>
	);
}
export default Aboutme;

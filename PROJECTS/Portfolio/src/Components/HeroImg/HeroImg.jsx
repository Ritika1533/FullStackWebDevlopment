import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import "./heroimg.css";

const HeroImg = () => {
	const { text } = useTypewriter({
		words: ["FullStack Developer", "Web Developer", "Software Developer"],
		loop: 0,
		typeSpeed: 70,
		deleteSpeed: 50,
		delaySpeed: 1000,
	});

	return (
		<div className="hero">
			<div className="content">
				<h1>Hey, I'm Ritika</h1>
				<h3>
					{text}
					<Cursor cursorColor="#6b495a" />
				</h3>
			</div>
		</div>
	);
};

export default HeroImg;

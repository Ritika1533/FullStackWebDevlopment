import React from "react";
import Navbar from "../../Components/Navbar/Navbar";
import IntroText from "../../Components/Intro/IntroText";
import "./home.css";

const Home = () => {
	return (
		<div className="home">
			<Navbar />
			<IntroText />
			{/* <Aboutme />
			<Edu />
			<Skillsection />
			<Proj />
			<ContactForm /> */}
		</div>
	);
};

export default Home;

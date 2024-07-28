import React from "react";
import Home from "./routes/Home/Home";
import About from "./routes/About/About";
import Skills from "./routes/Skills/Skills";
import Contact from "./routes/Contact/Contact";
import Projects from "./routes/Projects/Projects";
import { Routes, Route } from "react-router-dom";
import "./index.css";
function App() {
	return (
		<>
			<Routes>
				<Route path="/" element={<Home />}></Route>
				<Route path="/about" element={<About />}></Route>
				<Route path="/skills" element={<Skills />}></Route>
				<Route path="/contact" element={<Contact />}></Route>
				<Route path="/Projects" element={<Projects />}></Route>
			</Routes>
		</>
	);
}

export default App;

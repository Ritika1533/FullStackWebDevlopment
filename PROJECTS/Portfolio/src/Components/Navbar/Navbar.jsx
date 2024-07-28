import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import "./navbar.css";
function Navbar() {
	const [display, setdisplay] = useState(false);
	const showMenu = () => {
		setdisplay(!display);
	};
	return (
		<>
			<div className="header">
				<Link to="/">
					<img
						className="avtImg"
						alt="avtar"
						src="https://img.freepik.com/premium-photo/3d-character-cartoon_113255-30600.jpg?w=740"
					/>
				</Link>
				<ul className={display ? "navMenu" : "navMenu active"}>
					<li>
						<Link to="/">Home</Link>
					</li>
					<li>
						<Link to="/about">About</Link>
					</li>
					<li>
						<Link to="/skills">Skills</Link>
					</li>
					<li>
						<Link to="/projects">Projects</Link>
					</li>
					<li>
						<Link to="/contact">Contact</Link>
					</li>
				</ul>
				<div className="hamburger" onClick={showMenu}>
					{display ? (
						<FaTimes size={40} style={{ color: "white" }} />
					) : (
						<FaBars size={40} style={{ color: "white" }} />
					)}
				</div>
			</div>
		</>
	);
}
export default Navbar;

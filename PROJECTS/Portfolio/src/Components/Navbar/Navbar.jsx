import React, { useState } from "react";
import { Link } from "react-scroll";
import { FaBars, FaTimes } from "react-icons/fa";
import "./navbar.css";

function Navbar() {
	const [display, setdisplay] = useState(false);

	// Toggle menu visibility
	const showMenu = () => {
		setdisplay(!display);
	};

	// Hide menu after clicking a link
	const hideMenu = () => {
		setdisplay(false);
	};

	return (
		<>
			<div className="header">
				<h1 className="name">Ritika Keshri</h1>
				<ul className={display ? "navMenu active" : "navMenu"}>
					<li>
						<Link
							to="home"
							spy={true}
							smooth={true}
							offset={-70}
							duration={500}
							onClick={hideMenu} // Hide menu when link is clicked
						>
							Home
						</Link>
					</li>
					<li>
						<Link
							to="about"
							spy={true}
							smooth={true}
							offset={-70}
							duration={500}
							onClick={hideMenu} // Hide menu when link is clicked
						>
							About
						</Link>
					</li>
					<li>
						<Link
							to="skills"
							spy={true}
							smooth={true}
							offset={-70}
							duration={500}
							onClick={hideMenu} // Hide menu when link is clicked
						>
							Skills
						</Link>
					</li>
					<li>
						<Link
							to="projects"
							spy={true}
							smooth={true}
							offset={-70}
							duration={500}
							onClick={hideMenu} // Hide menu when link is clicked
						>
							Projects
						</Link>
					</li>
					<a href="./Resume.pdf" download>
						<button className="res-btn" onClick={hideMenu}>
							Resume
						</button>
					</a>
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

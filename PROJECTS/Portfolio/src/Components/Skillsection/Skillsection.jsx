import React from "react";
import { skillsData } from "./utils";
import "./skillsection.css";
const Skillsection = () => {
	return (
		<div className="inner">
			<div className="header">
				<h1 className="headerContent">My Skills</h1>
			</div>
			<div className="container">
				{skillsData.map((item, i) => {
					return (
						<div key={i} className="skill-box">
							<div className="skill-title">
								<div className="img">
									<img alt="skill" src={item.imgSrc} className="skill-icon" />
								</div>
								<h3>{item.title}</h3>
							</div>
							<p className="skillpara">
								This structure ensures that your data is clean, organized, and
								easily maintainable.
							</p>
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default Skillsection;

import React from "react";
import "./Proj.css";
import projectData from "../MyProject/utils";

function Proj() {
	return (
		<div className="portfolio">
			<div className="header">
				<h2 className="header-content">My Recent Work</h2>
			</div>

			<div className="procontainer portfolio_container">
				{projectData.map((item, i) => (
					<div className="portfolio_item" key={i}>
						<div className="portfolio_item-image">
							<img src={item.imgSrc} alt={item.name} />
						</div>
						<div className="projectName">
							<h3>{item.name}</h3>
						</div>
						<div className="portfolio_item-cta">
							<a href={item.link} target="_blank" rel="noopener noreferrer">
								Github
							</a>
						</div>
					</div>
				))}
			</div>
		</div>
	);
}

export default Proj;

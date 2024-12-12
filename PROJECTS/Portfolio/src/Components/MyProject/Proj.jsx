import React from "react";
import "./Proj.css";
import projectData from "../MyProject/utils";

function Proj() {
	return (
		<div className="portfolio">
			<div className="head">
				<h1 className="header-content">My Recent Works</h1>
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
							<button className="res-bt">
								<a href={item.link} target="_blank" rel="noopener noreferrer">
									{item.linkg}
								</a>
							</button>
						</div>
					</div>
				))}
			</div>
		</div>
	);
}

export default Proj;

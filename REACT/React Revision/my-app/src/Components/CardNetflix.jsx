import React from "react";
import "../index.css";
function CardNetflix({ imgSrc, title, link }) {
	return (
		<>
			<div className="cards">
				<div className="card">
					<img src={imgSrc} alt="img" />
					<div className="card-info">
						<h3 className="card-title">{title}</h3>
						<a href={link} target="_blank" rel="noopener noreferrer">
							<button>Watch now</button>
						</a>
					</div>
				</div>
			</div>
		</>
	);
}
export default CardNetflix;

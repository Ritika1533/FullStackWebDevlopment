import React from "react";
import "./Edu.css";
import { EducationData, ExperienceData } from "./EduData";
function Edu() {
	return (
		<>
			<div className="coitainer-edu">
				<div className="row">
					<div className="col">
						<h1 className="title">Education</h1>
						<div className="contents">
							{EducationData.map((item, i) => {
								return (
									<div className="box" key={i}>
										<h3>{item.degree}</h3>
										<h4>{item.school}</h4>
										<h4>{item.year}</h4>
										<h4>{item.score}</h4>
									</div>
								);
							})}
						</div>
					</div>
					<div className="col">
						<h1 className="title">Experience</h1>
						<div className="contents">
							{ExperienceData.map((item, i) => {
								return (
									<div className="box" key={i}>
										<h3>{item.role}</h3>
										<h4>{item.organisation}</h4>
										<h4>{item.duration}</h4>
										<h4>{item.work}</h4>
									</div>
								);
							})}
						</div>
					</div>
				</div>
			</div>
			<hr className="line" />
		</>
	);
}

export default Edu;

import React from "react";
import CardNetflix from "./CardNetflix";
import Sdata from "./Sdata";
function Cards() {
	return (
		<>
			<CardNetflix
				imgSrc={Sdata[0].imgSrc}
				title={Sdata[0].title}
				link={Sdata[0].link}
			/>
			<CardNetflix
				imgSrc={Sdata[1].imgSrc}
				title={Sdata[1].title}
				link={Sdata[1].link}
			/>
			<CardNetflix
				imgSrc={Sdata[2].imgSrc}
				title={Sdata[2].title}
				link={Sdata[2].link}
			/>
			<CardNetflix
				imgSrc={Sdata[3].imgSrc}
				title={Sdata[3].title}
				link={Sdata[3].link}
			/>
			<CardNetflix
				imgSrc={Sdata[4].imgSrc}
				title={Sdata[4].title}
				link={Sdata[4].link}
			/>
			<CardNetflix
				imgSrc={Sdata[5].imgSrc}
				title={Sdata[5].title}
				link={Sdata[5].link}
			/>
		</>
	);
}

export default Cards;

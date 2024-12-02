import React from "react";
function Cards({ srcImg, title, city, star }) {
	return (
		<div>
			<div className="flex flex-col items-center gap-4 rounded-lg">
				<div>
					<img class="h-auto max-w-full rounded-lg" src={srcImg} alt="" />
				</div>
				<div className="flex flex-col justify-center text-center">
					<h4 className="text-lg font-semibold">{title}</h4>
					<p className="text-gray-600">{city}</p>
					<p className="text-yellow-500">{star}</p>
				</div>
			</div>
		</div>
	);
}

export default Cards;

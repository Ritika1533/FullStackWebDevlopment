import React from "react";
import "../index.css";
const img1 = "https://picsum.photos/300/300";
const img2 = "https://picsum.photos/350/300";
const img3 = "https://picsum.photos/400/300";

function ImageGallary() {
	return (
		<div className="start">
			<h1
				style={{
					color: "green",
					display: "flex",
					justifyContent: "center",
					alignItems: "center",
					margin: "50px 0",
				}}
			>
				My image Gallary
			</h1>
			<div
				className="imageGallary"
				style={{
					margin: "auto",
					display: "flex",
					justifyContent: "center",
					alignItems: "center",
				}}
			>
				<img src={img1} alt="img1" />
				<img src={img2} alt="img2" />
				<img src={img3} alt="img3" />
			</div>
		</div>
	);
}

export default ImageGallary;

import React from "react";
let fname = "Ritika Keshri";
let img1 = "https://picsum.photos/200/300";
function JsxAttribute() {
	return (
		<>
			<h2 contentEditable>My name is {fname}</h2>
			<img src={img1} alt="imageRandom" />
		</>
	);
}
export default JsxAttribute;

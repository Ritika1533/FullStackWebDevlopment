import React from "react";
import ReactDom from "react-dom";
import Cards from "./Cards";
import "./index.css";
ReactDom.render(
	<>
		<Cards
			imgsrc="https://picsum.photos/210/300"
			title="A Netflix original series"
			sname="Dark"
			link="https://www.netflix.com/search?q=dark"
		/>
		<Cards
			imgsrc="https://picsum.photos/211/300"
			title="A Netflix original series"
			sname="Extra ciriculam"
			link="https://www.netflix.com/search?q=dark"
		/>
		<Cards
			imgsrc="https://picsum.photos/212/300"
			title="A Netflix original series"
			sname="Strange Things"
			link="https://www.netflix.com/search?q=dark"
		/>
	</>,
	document.getElementById("root")
);

const express = require("express");
const app = express();
const port = 8000;
//this way we can send html multiple element
app.get("/", (req, res) => {
	res.write("<h1>hello world</h1>");
	res.write("<h1>this is my home page</h1>");
	res.send();
});

app.get("/about", (req, res) => {
	res.send("i am about section");
});

// app.get("/temp", (req, res) => {
// 	res.send([
// 		{
// 			id: 1109,
// 			name: "ritika",
// 		},
// 		{
// 			id: 1110,
// 			name: "rishab",
// 		},
// 	]);
// });

app.get("/temp", (req, res) => {
	res.json([
		{
			id: 1109,
			name: "ritika",
		},
		{
			id: 1110,
			name: "rishab",
		},
	]);
});

app.listen(port, () => {
	console.log(`listning at http://localhost:${port}`);
});

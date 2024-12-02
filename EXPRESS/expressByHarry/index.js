const express = require("express");
const path = require("path");
const app = express();
const port = 4000;

app.get("/", (req, res) => {
	res.send("Hello World!");
});
app.get("/about/:name", (req, res) => {
	res.send("hello " + req.params.name);
});

app.get("/hii", (req, res) => {
	res.sendFile(path.join(__dirname, "index.html"));
});

app.listen(port, () => {
	console.log(`Example app listening at http://localhost:${port}`);
});

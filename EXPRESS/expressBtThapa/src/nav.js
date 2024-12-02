const express = require("express");
const app = express();
const port = 5000;
app.get("/", (req, res) => {
	res.send("welcome to our home page");
});
app.get("/about", (req, res) => {
	res.send("welcome to our about page");
});
app.get("/contact", (req, res) => {
	res.send("welcome to our contact page");
});
app.get("/temp", (req, res) => {
	res.send("welcome to our temperature page");
});
app.listen(port, () => {
	console.log(`listning at port http://localhost:${port}`);
});

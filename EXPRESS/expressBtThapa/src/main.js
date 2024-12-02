const express = require("express");
const path = require("path");
const app = express();
const port = 8000;
console.log(path.join(__dirname, "../public"));

const staticPath = path.join(__dirname, "../main");
app.use(express.static(staticPath));
app.get("/", (req, res) => {
	res.send("hii");
});

app.listen(port, () => {
	console.log(`listening at port http://localhost:${port}`);
});

import express from "express";
import Jokes from "./Jokes.js";

const app = express();

app.get("/", (req, res) => {
	res.send("server is ready to run");
});

app.get("/api/jokes", (req, res) => {
	//const randomIndex = Math.floor(Math.random() * Jokes.length);
	res.send(Jokes);
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
	console.log(`Server is running at http://localhost:${port}`);
});

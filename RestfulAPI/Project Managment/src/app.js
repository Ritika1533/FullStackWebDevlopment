const express = require("express");
require("./db/conn");
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json()); // For parsing application/json
app.use(express.urlencoded({ extended: true })); // For parsing application/x-www-form-urlencoded

const projectRouter = require("./routers/projectRouter");
const userRouter = require("./routers/userRouter");

app.use(projectRouter);
app.use(userRouter);

app.get("/", (req, res) => {
	res.send("PROJECT MANAGEMENT");
});

app.listen(port, () => {
	console.log(`Listening at port http://localhost:${port}`);
});

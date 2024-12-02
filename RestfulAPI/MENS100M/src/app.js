const express = require("express");
require("../src/db/conn");
const Player = require("../src/models/mens");
const router = require("../src/routers/men");

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(router);

app.listen(port, (req, res) => {
	console.log(`listning at port https://localhost:${port}`);
});

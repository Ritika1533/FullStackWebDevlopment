const express = require("express");
require("./db/conn");
const Worker = require("./model/workers");
const app = express();
const port = process.env.PORT || 3000;
app.use(express.json());
app.post("/workers", (req, res) => {
	console.log(req.body);
	const user = new Worker(req.body);
	//saving in database
	user
		.save()
		.then(() => {
			res.send(user);
		})
		.catch((e) => {
			res.send(e);
		});
});
app.listen(port, (req, res) => {
	console.log(`listening at port https://localhost:${port}`);
});

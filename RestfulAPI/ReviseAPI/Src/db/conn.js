const mongoose = require("mongoose");
mongoose
	.connect("mongodb://localhost:27017/worker-api")
	.then(() => {
		console.log("Connection to MongoDB successful");
	})
	.catch((e) => {
		console.error("Error connecting to MongoDB:");
	});

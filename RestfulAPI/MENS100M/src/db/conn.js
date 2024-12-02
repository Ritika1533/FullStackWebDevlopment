const mongoose = require("mongoose");
mongoose
	.connect("mongodb://localhost:27017/Olympics")
	.then(() => {
		console.log("successfully connected to MongoDB");
	})
	.catch((e) => {
		console.log("connection error ", e.message);
	});

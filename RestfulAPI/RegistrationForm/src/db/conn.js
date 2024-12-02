const mongoose = require("mongoose");
mongoose
	.connect("mongodb://localhost:27017/netflixReg")
	.then(() => {
		console.log("successfully connected to mongoDB");
	})
	.catch((e) => {
		console.log("connection error ", e.message);
	});

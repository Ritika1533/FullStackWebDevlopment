const mongoose = require("mongoose");
mongoose
	.connect(
		"mongodb+srv://ritikadb:dbritika@cluster0.unqnaq8.mongodb.net/project-db"
	)
	.then(() => {
		console.log("Successfully connected to mongoDB");
	})
	.catch((e) => {
		console.log("not connected to  mongoDB");
	});

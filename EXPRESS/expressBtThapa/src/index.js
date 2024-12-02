const express = require("express");
const path = require("path");
const hbs = require("hbs");
const app = express();
const templatePath = path.join(__dirname, "../templates/views");
const partialPath = path.join(__dirname, "../templates/partials");

// Set the view engine to Handlebars
app.set("view engine", "hbs");
app.set("views", templatePath);
hbs.registerPartials(partialPath);

// Define the route for the homepage
app.get("", (req, res) => {
	// Render the "index.hbs" view
	res.render("index.hbs", {
		channelName: "Thapa",
	});
});

// Define the route for other requests to the root path
app.get("/", (req, res) => {
	res.send("I am the home page");
});

app.get("/about", (req, res) => {
	res.render("about.hbs", {
		name: "ritika ",
	});
});

app.get("/front", (req, res) => {
	res.render("frontpage.hbs");
});

app.get("*", (req, res) => {
	res.render("404.hbs", {
		content: "OOPSss page not found ",
	});
});

// Start the server
app.listen(4000, () => {
	console.log("Listening at port http://localhost:4000");
});

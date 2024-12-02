const express = require("express");
require("../src/db/conn");
const path = require("path");
const hbs = require("hbs");
const Employee = require("./models/register");

const app = express();
const port = process.env.port || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const staticPath = path.join(__dirname, "../public");
const templatePath = path.join(__dirname, "../templates/views");
const partialsPath = path.join(__dirname, "../templates/partials");

app.use(express.static(staticPath));
app.set("view engine", "hbs");
app.set("views", templatePath);
hbs.registerPartials(partialsPath);

app.get("/", (req, res) => {
	res.render("index.hbs");
});

app.get("/register", (req, res) => {
	res.render("register.hbs");
});

app.post("/register", async (req, res) => {
	try {
		const password = req.body.password;
		const confirmPassword = req.body.confirmpassword;
		if (password === confirmPassword) {
			const RegisterEmployee = new Employee({
				name: req.body.name,
				email: req.body.email,
				gender: req.body.gender,
				phone: req.body.phone,
				age: req.body.age,
				password: req.body.password,
				cpassword: confirmPassword,
			});
			const registered = await RegisterEmployee.save();
			res.status(201).render("index.hbs");
		} else {
			res.send("password not matched");
		}
	} catch (e) {
		res.send(e);
	}
});

app.get("/login", (req, res) => {
	res.render("login.hbs");
});

app.listen(port, (req, res) => {
	console.log(`listening at port https://localhost:${port}`);
});

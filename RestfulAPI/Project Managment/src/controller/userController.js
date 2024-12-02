const User = require("../model/user");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const SECRET_KEY = "PROJECTAPI"; // Ideally, use environment variables for secrets

// Register user function
const register = async (req, res) => {
	const { username, email, password } = req.body;
	try {
		// Check if user already exists
		const existingUser = await User.findOne({ email });
		if (existingUser) {
			return res.status(400).send("User already exists");
		}

		// Hash password
		const hashedPassword = await bcrypt.hash(password, 10);

		// Create new user
		const newUser = new User({
			username,
			email,
			password: hashedPassword,
		});
		await newUser.save();

		// Create token
		const token = jwt.sign(
			{ email: newUser.email, userId: newUser._id },
			SECRET_KEY
		);

		res.status(201).json({ user: newUser, token });
	} catch (e) {
		res.status(500).send(e);
	}
};

// Login user function (dummy implementation for now)
const login = async (req, res) => {
	const { username, email, password } = req.body;
	try {
		// Check if user already exists

		const existingUser = await User.findOne({ email });
		if (!existingUser) {
			return res.status(400).send("User not found");
		}

		//checking password
		const matchPassword = await bcrypt.compare(password, existingUser.password);
		if (!matchPassword) {
			return res.status(404).send("password not mached");
		}

		//token generate
		const token = jwt.sign(
			{ email: existingUser.email, userId: existingUser._id },
			SECRET_KEY
		);

		res.status(201).json({ user: existingUser, token });
	} catch (e) {
		res.status(500).send(e);
	}
};

module.exports = { register, login };

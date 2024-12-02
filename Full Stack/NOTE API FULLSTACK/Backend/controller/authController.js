import User from "../models/userModel.js";
import { errorHandler } from "../utils/error.js";
import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";

// SIGNUP
export const signup = async (req, res, next) => {
	const { username, email, password } = req.body;
	const isValidUser = await User.findOne({ email });

	//---- if email already registered ------
	if (isValidUser) {
		return next(errorHandler(400, "User already exists"));
	}

	// Hashing password
	const hashedPassword = bcryptjs.hashSync(password, 10);
	const newUser = new User({
		username,
		email,
		password: hashedPassword,
	});

	try {
		await newUser.save();
		res.status(202).json({
			success: true,
			message: "User created successfully",
			statusCode: 202,
		});
	} catch (error) {
		next(error);
	}
};

// SIGNIN
export const signin = async (req, res, next) => {
	const { email, password } = req.body;
	try {
		const validUser = await User.findOne({ email });
		if (!validUser) {
			return next(errorHandler(404, "User not found"));
		}
		const validPassword = bcryptjs.compareSync(password, validUser.password);
		if (!validPassword) {
			return next(errorHandler(401, "Wrong password"));
		}

		const token = jwt.sign({ id: validUser._id }, process.env.JWT_SECRET);
		const { password: pass, ...rest } = validUser._doc;
		res.cookie("access_token", token, { httpOnly: true }).status(200).json({
			success: true,
			message: "Login successfully",
			rest,
		});
	} catch (error) {
		return next(errorHandler(500, "Internal Server Error"));
	}
};
export const signout = async (req, res, next) => {
	try {
		//  clear cookie
		res.clearCookie("access_token");
		res.status(200).json({
			success: true,
			message: "user logged out successfully",
		});
	} catch (error) {
		next(error);
	}
};
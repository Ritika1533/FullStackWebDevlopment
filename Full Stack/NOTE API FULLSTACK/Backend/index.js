import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import cookieParser from "cookie-parser";
import authRouter from "./routes/authRoute.js";
import noteRouter from "./routes/noteRoute.js";
const app = express();
dotenv.config();
const PORT = process.env.PORT || 3000;
// to make input as json
app.use(express.json());
app.use(cookieParser());
app.use(cors({ origin: ["http://localhost:5173"], credentials: true }));

mongoose
	.connect(process.env.URL)
	.then(() => {
		console.log("Successfully connected to MongoDB");
	})
	.catch((err) => {
		console.error("Connection issue:", err);
	});

app.listen(PORT, () => {
	console.log(`Server is running on port ${PORT}`);
});

//IMPORT ROUTES
app.use("/api/auth", authRouter);
app.use("/api/note", noteRouter);

//ERROR HANDLING
app.use((err, req, res, next) => {
	const statusCode = err.statusCode || 500;
	const message = err.message || "Internal server error";
	return res.status(statusCode).json({
		success: false,
		statusCode,
		message,
	});
});

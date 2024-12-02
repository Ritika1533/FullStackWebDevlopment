const mongoose = require("mongoose");
const projectSchema = new mongoose.Schema(
	{
	    title: {
			type: String,
			required: true,
		},
		description: {
			type: String,
			required: true,
		},
		status: {
			type: String,
			enum: ["pending", "in-progress", "completed", "blocked"],
			default: "pending",
		},
		userId: {
			type: mongoose.Schema.Types.ObjectId,
			ref: "User",
			required: true,
		},
	},
	{ timestamps: true }
);
//collection
const Project = new mongoose.model("Project", projectSchema);
module.exports = Project;

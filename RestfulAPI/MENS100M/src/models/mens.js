const mongoose = require("mongoose");
const menSchema = new mongoose.Schema({
	ranking: {
		type: Number,
		required: true,
		unique: true,
	},
	name: {
		type: String,
		required: true,
		minlength: 3,
		trim: true,
	},
	dob: {
		type: String,
		trim: true,
	},
	country: {
		type: String,
		required: true,
		trim: true,
	},
	score: {
		type: Number,
		required: true,
	},
	event: {
		type: String,
		default: "100m",
	},
});
const Player = new mongoose.model("Player", menSchema);
module.exports = Player;

const mongoose = require("mongoose");
const validator = require("validator");
const workersSchema = new mongoose.Schema({
	name: {
		type: String,
		required: true,
		minlength: 3,
	},
	email: {
		type: String,
		required: true,
		unique: [true, "email already entered"],
		validator(value) {
			if (!validator.isEmail(value)) {
				throw new error("invalid email");
			}
		},
	},
	phone: {
		type: Number,
		required: true,
		min: 10,
	},
});
//now create a new collections

const Worker = new mongoose.model("Worker", workersSchema);
module.exports = Worker;

const mongoose = require("mongoose");
const RegistersSchema = new mongoose.Schema({
	name: {
		type: String,
		required: true,
		minlength: 3,
	},
	email: {
		type: String,
		required: true,
		unique: true,
	},
	password: {
		type: String,
		required: true,
	},
	cpassword: {
		type: String,
		required: true,
	},
	phone: {
		type: Number,
		required: true,
		unique: true,
	},
	age: {
		type: Number,
		required: true,
	},
	gender: {
		type: String,
		required: true,
	},
});
const Employee = new mongoose.model("Employee", RegistersSchema);
module.exports = Employee;

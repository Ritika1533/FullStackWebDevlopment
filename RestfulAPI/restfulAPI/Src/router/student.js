const express = require("express");
const router = new express.Router();
const Student = require("../models/students");
//1.create a new router
//2. we need to define a router
// Create a new student
// app.post("/stud", (req, res) => {
// 	console.log(req.body);
// 	const user = new Student(req.body);
// 	user
// 		.save()
// 		.then(() => {
// 			res.status(201).send(user);
// 		})
// 		.catch((e) => {
// 			res.status(400).send(e);
// 		});
// });

// Create a new data
router.post("/stud", async (req, res) => {
	try {
		const user = new Student(req.body);
		const createUser = await user.save();
		res.status(201).send(createUser);
	} catch (e) {
		res.status(400).send(e);
	}
});

// Read the data
router.get("/stud", async (req, res) => {
	try {
		const studentData = await Student.find();
		res.send(studentData);
	} catch (e) {
		res.send(e);
	}
});

// Read the data of indivisual
router.get("/stud/:id", async (req, res) => {
	try {
		const _id = req.params.id;
		const indivisualData = await Student.findById(_id);

		if (!indivisualData) {
			return res.status(404).send();
		} else {
			res.send(indivisualData);
		}
	} catch (e) {
		res.status(500).send(e);
	}
});

//delete data
router.delete("/stud/:id", async (req, res) => {
	try {
		const id = req.params.id;
		const deleteData = await Student.findByIdAndDelete(id);
		if (!deleteData) {
			res.status(400).send();
		} else {
			res.send(deleteData);
		}
	} catch (e) {
		res.status(500).send(e);
	}
});

//update the data
router.patch("/stud/:id", async (req, res) => {
	try {
		const _id = req.params.id;
		const updateStudent = await Student.findByIdAndUpdate(_id, req.body, {
			new: true,
		});
		res.send(updateStudent);
	} catch (e) {
		res.status(404).send(e);
	}
});
module.exports = router;

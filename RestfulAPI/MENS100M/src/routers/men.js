const express = require("express");
const router = new express.Router();
const Player = require("../models/mens");

router.post("/mens", async (req, res) => {
	try {
		console.log(req.body);
		const user = new Player(req.body);
		const saveData = await user.save();
		res.status(201).send(userData);
	} catch (e) {
		res.status(400).send(e);
	}
});

router.get("/mens", async (req, res) => {
	try {
		const getData = await Player.find();
		res.send(getData);
	} catch (e) {
		res.status(400).send(e);
	}
});

router.get("/mens/:id", async (req, res) => {
	try {
		const _id = req.params.id;
		const getIndivisualData = await Player.findById(_id);
		if (!getIndivisualData) {
			return res.status(404).send();
		}
		res.send(getIndivisualData);
	} catch (e) {
		res.status(400).send(e);
	}
});

router.patch("/mens/:id", async (req, res) => {
	try {
		const id = req.params.id;
		const updateData = await Player.findByIdAndUpdate(id, req.body, {
			new: true,
		});
		res.send(updateData);
	} catch (e) {
		res.status(500).send(e);
	}
});

router.delete("/mens/:id", async (req, res) => {
	try {
		const id = req.params.id;
		const deleteData = await Player.findByIdAndDelete(id);
		res.send(deleteData);
	} catch (e) {
		res.status(500).send(e);
	}
});

module.exports = router;

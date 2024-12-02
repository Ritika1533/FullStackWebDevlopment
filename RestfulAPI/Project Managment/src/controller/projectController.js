const Project = require("../model/project");

const postProject = async (req, res, next) => {
	const { title, description, status } = req.body;
	try {
		const newProject = new Project({
			title: title,
			description: description,
			userId: req.userId,
			status: status,
		});
		await newProject.save();
		res.status(201).send(newProject);
	} catch (e) {
		res.status(500).send(e);
	}
};

const getProject = async (req, res, next) => {
	try {
		const getProjects = await Project.find({ userId: req.userId });
		res.send(getProjects);
	} catch (e) {
		res.status(500).json({ message: "Failed to retrieve projects" });
	}
};

const updateProject = async (req, res, next) => {
	const id = req.params.id;
	const { title, description, status } = req.body;
	const updatedProject = {
		title: title,
		description: description,
		status: status,
		userId: req.userId,
	};
	try {
		const updatedProject = await Project.findByIdAndUpdate(id, updatedProject, {
			new: true,
		});
		res.status(200).send(updatedProject);
	} catch (e) {
		res.status(400).json({ message: "Failed to update project" });
	}
};

const deleteProject = async (req, res, next) => {
	const id = req.params.id;
	try {
		const deletedProject = await Project.findByIdAndDelete(id);
		res.status(200).send(deletedProject);
	} catch (e) {
		res.status(400).json({ message: "Failed to delete project" });
	}
};

module.exports = {
	postProject,
	getProject,
	updateProject,
	deleteProject,
};

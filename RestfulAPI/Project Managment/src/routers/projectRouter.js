const express = require("express");
const projectRouter = new express.Router();
const Project = require("../model/project");
const auth = require("../middleware/auth");
const {
	postProject,
	getProject,
	updateProject,
	deleteProject,
} = require("../controller/projectController");
//create project
projectRouter.post("/project", auth, postProject);
//get project
projectRouter.get("/project", auth, getProject);
//update project
projectRouter.patch("/project/:id", auth, updateProject);
//delete project
projectRouter.delete("/project/:id", auth, deleteProject);
module.exports = projectRouter;

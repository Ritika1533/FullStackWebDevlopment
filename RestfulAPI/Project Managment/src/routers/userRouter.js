const express = require("express");
const userRouter = new express.Router();
const { register, login } = require("../controller/userController");
const auth = require("../middleware/auth");
// Register user
userRouter.post("/register",  register);
// Login user
userRouter.post("/login", login);

module.exports = userRouter;

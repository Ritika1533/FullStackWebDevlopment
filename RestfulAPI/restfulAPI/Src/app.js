const express = require("express");
require("./db/conn");
const Student = require("./models/students");
const StudentRouter = require("./router/student");

const app = express();
const port = process.env.PORT || 8000;

app.use(express.json());
app.use(StudentRouter);
//3 we neeed to register our router
app.listen(port, () => {
	console.log(`Server is listening at http://localhost:${port}`);
});

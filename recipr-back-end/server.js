const express = require("express");
const userRoutes = require("./userRoutes");
const app = express();
// app.use(express.json());

require("./db");
app.use(userRoutes);
app.use(express.urlencoded({ extended: true }));

app.listen(5000, () => {
	console.log("Server running at 5000");
});

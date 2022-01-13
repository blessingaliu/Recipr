const express = require("express");
const userRoutes = require("./userRoutes");
app.use(express.json());
const app = express();

require("./db");
app.use(express.urlencoded({ extended: true }));

app.use(userRoutes);

app.listen(5000, () => {
  console.log("Server running at 5000");
});

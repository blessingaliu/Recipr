const express = require("express");
const userRoutes = require("./userRoutes");
const cors = require("cors");
const app = express();
// app.use(express.json());

require("./db");
app.use(cors());

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(userRoutes);

app.listen(5001, () => {
  console.log("Server running at 5001");
});

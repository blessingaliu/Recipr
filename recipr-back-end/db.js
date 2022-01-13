const mongoose = require("mongoose");
const uri = ``;

mongoose
  .connect(uri)
  .then(() => {
    console.log(uri);
  })
  .catch((error) => console.log(error));

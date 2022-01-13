const mongoose = require("mongoose");
const uri = `mongodb+srv://recipr:recipr40@cluster0.tvwcq.mongodb.net/mealsApp?retryWrites=true&w=majority`;

mongoose
  .connect(uri)
  .then(() => {
    console.log(uri);
  })
  .catch((error) => console.log(error));

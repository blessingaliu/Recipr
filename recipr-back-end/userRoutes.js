const router = require("express").Router();
const User = require("./userModel");

router.post("/users", async (req, res) => {
  console.log(req.body);
  try {
    const user = await User.create(req.body);
    await user.generateToken();
    res.send(user);
  } catch (error) {
    res.status(500).send();
  }
});

router.post("/login", async (req, res) => {
  const {email, password} = req.body;
  try {
    const user = await User.findByCredentials(email, password);
    await user.generateToken();
    res.status(200).send(user);
  }
  catch (e) {
    console.log(e);
    res.status(500).send()
  }

});

module.exports = router;

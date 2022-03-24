const User = require("../models/user");
const login = async (req, res) => {
  try {
    const name = req.body.name;
    const password = req.body.password;

    const authentication = await User.find({ name, password });
    if (authentication.length > 0) {
      res.send("User Found" + authentication);
    } else {
      res.status(404).send("User is not Found");
    }
  } catch (error) {
    res.status(400).send();
  }
};
module.exports = login;

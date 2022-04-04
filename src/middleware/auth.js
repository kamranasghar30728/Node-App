const jwt = require("jsonwebtoken");
const User = require("../models/user");

const auth = async (req, res, next) => {
  try {
    const token = req.header("Authorization");
    const decoded = jwt.verify(token, "secret");
    const user = await User.findOne({name:decoded.name,password:decoded.password,"tokens.token":token });
    
    if (!user) {
      throw new Error("NOT FOUND");
    }
    req.token = token
    req.user = user;
   
    next();
  } catch (e) {
    res.status(401).send({ error: "Please authenticate " });
  }
};

module.exports = auth;

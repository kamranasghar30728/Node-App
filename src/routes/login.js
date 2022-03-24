const express = require("express");
const user = require("../models/user");
require("../db/mongoose");
const User = require("../models/user");
const router = express.Router();
const auth = require("../middleware/auth");
const login = require("../Controller/login");
router.post("/login", auth, login);

module.exports = router;

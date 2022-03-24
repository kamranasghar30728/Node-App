const express = require("express");
require("../db/mongoose");
const postUser = require("../Controller/user");
const router = express.Router();
router.post("/signup", postUser);
module.exports = router;

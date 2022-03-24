const express = require("express");
const router = express.Router();
const postOrganization = require("../Controller/organization");
const auth = require("../middleware/auth");
router.post("/organization", auth, postOrganization);
module.exports = router;

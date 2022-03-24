const express = require("express");
require("../db/mongoose");

const router = express.Router();
const Budget = require("../models/budget");
const auth = require("../middleware/auth");
const {
  postBudget,
  deleteBudget,
  updateBudget,
} = require("../Controller/budget");

router.post("/budget", auth, postBudget);
router.delete("/budget/:id", auth, deleteBudget);
router.patch("/budget/:id", auth, updateBudget);

module.exports = router;

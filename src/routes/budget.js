const express = require("express");
require("../db/mongoose");

const router = express.Router();
const Budget = require("../models/budget");
const auth = require("../middleware/auth");
const {
  postBudget,
  deleteBudget,
  updateBudget,
  getBudget,
  getBudgetById
} = require("../Controller/budget");

router.post("/budget", auth, postBudget);
router.delete("/budget/:id", auth, deleteBudget);
router.patch("/budget/:id", auth, updateBudget);
router.get("/budget", auth, getBudget);
router.get("/budget/:id", auth, getBudgetById);


module.exports = router;

const mongoose = require("mongoose");
const budgetSchema = new mongoose.Schema({
  budget: {
    type: Number,
    required: true,
  },
});
const budget = new mongoose.model("budget", budgetSchema);
module.exports = budget;

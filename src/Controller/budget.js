const Budget = require("../models/budget");

const postBudget = async (req, res) => {
  try {
    const budget = Budget(req.body);
    const savebudget = await budget.save();
    res.send(savebudget);
  } catch (error) {
    res.status(400).send(error);
  }
};

const deleteBudget = async (req, res) => {
  try {
    const _id = req.params.id;
    const deleteBudget = await Budget.findByIdAndDelete(_id);
    res.send(deleteBudget);
  } catch (error) {
    res.send(error);
  }
};
const updateBudget = async (req, res) => {
  try {
    const _id = req.params.id;
    const updateBudget = await Budget.findByIdAndUpdate(_id, req.body);
    res.send(updateBudget);
  } catch (error) {
    res.send(error);
  }
};
module.exports = { postBudget, updateBudget, deleteBudget };

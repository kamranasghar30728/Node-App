const mongoose = require("mongoose");
mongoose
  .connect("mongodb://localhost:27017/Expense-Tracket-App")
  .then(() => {
    console.log("connection successful");
  })
  .catch((e) => {
    console.log(e);
  });

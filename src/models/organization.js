const mongoose = require("mongoose");
const organizationSchema = new mongoose.Schema({
  organization: {
    type: String,
    required: true,
  },
});
const organization = new mongoose.model("organization", organizationSchema);
module.exports = organization;

const mongoose = require("mongoose");
const organizationSchema = new mongoose.Schema({
  organization: {
    type: String,
    required: true,
  },
  owner:{
    type:mongoose.Schema.Types.ObjectId,
    required:true,
    ref:"user"
  }
});
const organization = new mongoose.model("organization", organizationSchema);
module.exports = organization;

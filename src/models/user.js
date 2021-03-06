const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    unique:true,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },

  tokens: [
    {
      token: {
        type: String,
        required: true,
      },
    },
  ],
});
userSchema.virtual('org', {
  ref: 'organization',
  localField: '_id',
  foreignField: 'owner'
})
userSchema.methods.generateAuthToken = async function () {
  const user = this;
  const token = jwt.sign(
    { name: user.name, password: user.password },
    "secret"
  );

  user.tokens = user.tokens.concat({ token });
  await user.save();
  return token;
};

const user = new mongoose.model("user", userSchema);
module.exports = user;

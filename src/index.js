const express = require("express");
require("./db/mongoose");
const app = express();

const routes = require("./routes/user");
const login = require("./routes/login");
const budget = require("./routes/budget");
const organization = require("./routes/organization");

const port = process.env.PORT || 3000;

app.use(express.json());
app.use(routes);
app.use(login);
app.use(organization);
app.use(budget);
const o=require("./models/organization")
const User=require("./models/user")


const main=async()=>{
// const org=await o.findById("6241bd95dae197b0e8481d2f")
// await org.populate("owner")
// console.log(org.owner);
const user = await User.findById('6241b5fd4ca9a7aabfcb9ccc')
await user.populate('org')
 console.log(user)
}
main()
app.listen(port,(req,res)=>{
    console.log(`Running in port ${port}`);
});

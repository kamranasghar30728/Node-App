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

app.listen(port);

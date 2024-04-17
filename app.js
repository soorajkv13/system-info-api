const express = require("express");
const morgan = require("morgan");
const {connectToDB} = require('./db');
require("dotenv").config();
const app = express();
const PORT = process.env.PORT || 5000;

// Set the server's time zone to UTC
process.env.TZ = 'UTC';

app.use(express.json()); //allows us to access request body as req.body
app.use(morgan("dev"));  //enable incoming request logging in dev mode

const routes = require("./src/routes/systemInfoRoute");
app.use('/system-check', routes);

// connect mongo atlas
connectToDB();

app.listen(PORT, () => {
  console.log("Server started listening on port : ", PORT);
});
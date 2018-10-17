const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const students = require("./src/routes/api/router");
const app = express();

//middle ware
app.use(bodyParser.json());

//mongo db connection
const mydb = require("./src/config/config").mongoURI;

mongoose
  .connect(mydb)
  .then(() => console.log(" Mongo db connections active and live "))
  .catch(error => console.error(error));

const port = process.env.PORT || 3001;

//API route end point
app.use("/api/student", students);

//arrow funstion => //es6 syntax
app.listen(port, () => console.log(`My server is live at local host  ${port}`));

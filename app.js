const express = require("express");
const app = express();
const bodyParser = require('body-parser');
const routes = require("./routes/index");
const errorHandlers = require('./handlers/errorHandlers');

app.use(bodyParser.urlencoded({ extended: true }));

//enviornmental variables
require("dotenv").config();
const port = process.env.PORT || 7777;

app.use(express.static("public"));

//view engine setup
app.set("views", "./views");
app.set("view engine", "pug");


app.use("/", routes);
//if the above routes aren't found we mark it as 404 and move along
app.use(errorHandlers.notFound);

app.listen(port, () => {
  console.log(`Application is running on ${port}`);
});

module.exports = app;

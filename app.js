const express = require("express");
const app = express();
const bodyParser = require('body-parser');
const flash = require('connect-flash');
const session = require('express-session');
const routes = require("./routes/index");
const errorHandlers = require('./handlers/errorHandlers');

//enviornmental variables
require("dotenv").config();
const port = process.env.PORT || 7777;

app.use(express.static("public"));

//using sessions so that we can use 'connect flash'
app.use(
  session({
    secret: process.env.SECRET,
    key: process.env.KEY,
    resave: false,
    saveUninitialized: false
  })
);
//setting up flash so we can flash the user messages for the contact form
app.use(flash());

app.use((req, res, next) => {
  res.locals.flashes = req.flash();
  next();
})

//view engine setup
app.set("views", "./views");
app.set("view engine", "pug");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/", routes);
//if the above routes aren't found we mark it as 404 and move along
app.use(errorHandlers.notFound);

app.listen(port, () => {
  console.log(`Application is running on ${port}`);
});

module.exports = app;

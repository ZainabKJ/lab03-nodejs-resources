const express = require("express");
//creating app
const app = express();

const ejs = require('ejs');

//make the app listen on port
const port = process.argv[2] || process.env.PORT || 3000;
const server = app.listen(port, () => {
  console.log(`Cart app listening at http://localhost:${port}`);
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//handling static HTML and EJS templates
app.use(express.static("public"));
app.set("view engine", "ejs");
app.get("/", (req, res) => {
  res.render("index"); //no need for ejs extension
});
const session = require('express-session');
app.use(session({ secret: 'value' }))
//route for contacts
app.get("/contacts", (req, res) => {
  res.render("contacts");
});

app.get("/api/login", (req, res) => {
  res.render("login");
});

app.get("/api/register", (req, res) => {
  res.render("register");
});

// // //pass requests to the router middleware
const router = require("./apis/routes");
app.use(router);

//route for catalog
app.get("/api/catalog", (req, res) => {
  res.render("catalog");
});

//route for clients
app.get("/api/details", (req, res) => {
  res.render("details");
});

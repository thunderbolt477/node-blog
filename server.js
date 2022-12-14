const express = require("express");
const path = require("path"); // require path to use routes
const bodyParser = require("body-parser");

const app = express();
const ejs = require("ejs");
const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/my_database");

app.use(express.static("public"));
app.set("view engine", "ejs");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.render("index");
});

app.get("/about", (req, res) => {
  res.render("about");
});

app.get("/contact", (req, res) => {
  res.render("contact");
});

app.get("/post", (req, res) => {
  res.render("post");
});

app.get("/posts/new", (req, res) => {
  res.render("create");
});

app.post("/posts/store", (req, res) => {
  console.log(req.body);
  res.redirect("/");
});

app.listen(3000, () => {
  console.log("App listening on port 3000");
});

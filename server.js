const express = require("express");
const path = require("path") // require path to use routes



const app = express()
const ejs = require("ejs")
const mongoose = require("mongoose")
await mongoose.connect("mongodb://localhost/my_database")


app.use(express.static("public"))
app.set("view engine", "ejs")




app.get("/", (req, res) => {
    res.render("index");
})







app.listen(3000, () => {
    console.log("App listening on port 3000")
})
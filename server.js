const express = require("express");
const path = require("path") // require path to use routes



const app = express()
app.use(express.static("public"))

app.get("/", (req, res) => {
    res.sendFile(path.resolve(__dirname, "index.html"))
})

app.get("/", (req, res) => {
    res.sendFile(path.resolve(__dirname, "about.html"))
})

app.get("/", (req, res) => {
    res.sendFile(path.resolve(__dirname, "contact.html"))
})

app.get("/about", (req, res) => {
    res.json({
        name: "Tim Balilo"
    })
})






app.listen(3000, () => {
    console.log("App listening on port 3000")
})
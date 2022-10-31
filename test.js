const mongoose = require("mongoose")
const BlogPost = require("./models/BlogPost")

mongoose.connect("mongodb://localhost/my_database", {useNewUrlParser: true}); // will create a new db if it doesnt exist

BlogPost.create({ // creates new blog post in db
    title: "My First Post",
    body: "Hello, this is my first post."
}, (error, blogpost) => {
    console.log(error, blogpost) // callback which says whatever error 
})
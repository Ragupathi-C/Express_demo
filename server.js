
const express = require("express");

var app = express();

app.get("/", function (req, res) {
    res.send('<h1>hello</h1>')
});

app.get("/contact", function (req, res) {
    res.send('contact me at:ragupathichinnasamy202@gmail.com');
});

app.get("/about", function (req, res) {
    res.send('This website is owned by Ragupathi');
});
app.get("/hobbies", function (req, res) {
    res.send('Ragupathi');
});

app.listen(3000, function () {
    console.log("server started at 3000");
});
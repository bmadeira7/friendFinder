var express = require('express')
var http = require("http");
var path = require('path')
var fs = require("fs");
var friends = require("./app/data/friends.js")

// Sets up the Express App
// =============================================================
var PORT = 8080;
var app = express();



// Middleware - Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, "./app/public/home.html"))
})
app.get('/survey', function(req, res) {
    res.sendFile(path.join(__dirname, "./app/public/survey.html"))
})
app.get('/data/friends', function(req, res) {
    return res.json(friends);
})
// function handleRequest(req, res) {
    // var path = req.url;

    // switch (path) {
    //     case "/survey":
    //         return fs.readFile(__dirname + "/survey.html", function(err, data){
    //             res.writeHead(200, { "Context-Type": "text/html"});
    //             res.end(data);
    //         });
    //     default:
    //     return fs.readFile(__dirname + "/home.html", function(err, data){
    //         res.writeHead(200, { "Context-Type": "text/html"});
    //         res.end(data);
    //     });
    // }
// }

// app.get("/", function(req, res) {
//     res.sendFile(path.join(__dirname, "view.html"));
//   });

app.listen(PORT, function(){
    console.log("server is listenin' on port:" + PORT);
})
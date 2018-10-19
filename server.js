var express = require('express')
var http = require("http");
var path = require('path')
var fs = require("fs");

var friends = require("./app/data/friends.js")
var apiRoute = require("./app/routing/apiRoutes.js")
var htmlRoute = require("./app/routing/htmlRoutes.js")


// Sets up the Express App
// =============================================================
var PORT = process.env.PORT || 8080;
var app = express();



// Middleware - Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//here i tried to make my cityScape.png image available
app.use(express.static("public"));
app.use(express.static("images"));


apiRoute(app);
htmlRoute(app);


app.listen(PORT, function () {
    console.log("server is listenin' on port:" + PORT);
})





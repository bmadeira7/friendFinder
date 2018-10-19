//this page will send back visual webpage

var express = require('express')
var http = require("http");
var path = require('path')
var fs = require("fs");
// var friends = require("./app/data/friends.js")

// Sets up the Express App
// =============================================================
var PORT = 8080;
var app = express();


app.use(express.urlencoded({ extended: true }));
app.use(express.json());

function htmlRoute(app){

    
    //not sure about this part below... what else do i need to do in this page?
    app.get('/survey', function (req, res) {
        res.sendFile(path.join(__dirname, "/../public/survey.html"))
    })
    app.get('/', function (req, res) {
        res.sendFile(path.join(__dirname, "/../public/home.html"))
    })
    
   
}

module.exports = htmlRoute;
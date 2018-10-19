//this page will send back visual webpage

var express = require('express')
var path = require('path')



// Sets up the Express App
// =============================================================
var PORT = 8080;
var app = express();


app.use(express.urlencoded({ extended: true }));
app.use(express.json());

function htmlRoute(app){

    
    //express get requests
    app.get('/survey', function (req, res) {
        res.sendFile(path.join(__dirname, "/../public/survey.html"))
    })
    app.get('/', function (req, res) {
        res.sendFile(path.join(__dirname, "/../public/home.html"))
    })
    
   
}

module.exports = htmlRoute;
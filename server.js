var express = require('express')

var apiRoute = require("./app/routing/apiRoutes.js")
var htmlRoute = require("./app/routing/htmlRoutes.js")


// dictates which port we are on, the 1st PORT is heroku
var PORT = process.env.PORT || 8080;
// Sets up the Express App variable
var app = express();



// Middleware - Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//here i tried to make my cityScape.png image available. no luck yet.
app.use(express.static("public"));
app.use(express.static("images"));

//to run the apiRoute function
apiRoute(app);
//to run the htmlRoute function
htmlRoute(app);

//determines which port we are listening on
app.listen(PORT, function () {
    console.log("server is listenin' on port:" + PORT);
})





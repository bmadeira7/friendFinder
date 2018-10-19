//this page will send back the data
var express = require('express')
var http = require("http");
var path = require('path')
var fs = require("fs");
var friendsList = require("../data/friends.js")

// Sets up the Express App
// =============================================================
var PORT = 8080;
var app = express();

// my (large) apiRoute function which handles the logic of the matching
function apiRoute(app) {
    app.get('/api/friends', function (req, res) {
        res.json(friendsList)
    });



    app.post('/api/friends', function (req, res) {
        var bestMatch = 500;
        var bestMatchObj = {};
        var newFriend = req.body;
//setting up an empty array to hold the scores or points
        var scores = [];

        for (let i = 0; i < friendsList.length; i++) {
            
        }
        //1. getting the sum of the new friends scores
        var scoreSum = 0;
        for (let i = 0; i < 10; i++) {
            scoreSum += parseInt(newFriend.scores[i])
        }
   

        // Cycling thru the current friends in the friendList Array and check their scores against the new user scores.
        // 2. looping thru the current friends and getting the sum of their scores.
        var currentFriendSum = 0;
        for (let i = 0; i < friendsList.length; i++) {

            for (let a = 0; a < scores.length; a++) {
                currentFriendSum += parseInt(friendsList[i].scores[a])
               
            }
            // 3. this will compare each friend from the database to the new friend scores
            var matchDifference = scoreSum - currentFriendSum

            //4. if the diff between the new friend score and the current friend from databases score is the lowest - update them as the best match.
            if (matchDifference <= bestMatch) {
                bestMatch = matchDifference;
                bestMatchObj = friendsList[i]
            }
        }
        //pushing the new friend into the friendsList array on friends.js
        friendsList.push(newFriend);

        //5. sending the data of the best match to survey.html and displaying the match in the modal
        res.json(bestMatchObj)

    })

}
//exporting the apiRoute function to be used elsewhere
module.exports = apiRoute;
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


function apiRoute(app) {
    app.get('/api/friends', function (req, res) {
        res.json(friendsList)
    });



    app.post('/api/friends', function (req, res) {
        var bestMatch = 500;
        var bestMatchObj = {};
        var newFriend = req.body;
        //    console.log(newFriend)

        
        var scores = [];
        
        for (let i = 0; i < friendsList.length; i++) {
            console.log(friendsList[i].scores)
        }
        //1. getting the sum of the new friends scores
        var scoreSum = 0;
        for (let i = 0; i < 10; i++) {
            scoreSum += parseInt(newFriend.scores[i])
        }
        console.log(scoreSum)
        
        // Cycling thru the current friends in the friendList Array and check their scores against the new user scores.
        // 2. loop thru the current friends and get the sum of their scores.
        var currentFriendSum = 0;
        for (let i = 0; i < friendsList.length; i++) {
            
            for (let a = 0; a < scores.length; a++) {
                currentFriendSum += parseInt(friendsList[i].scores[a])
                console.log(currentFriendSum)
            }
            // 3. compare each friend from the database to the new friend scores
            var matchDifference = scoreSum - currentFriendSum
            //4. if the diff between the new friend score and the current friend from databases score is the lowest - update them as the best match.
            if (matchDifference <= bestMatch) {
                bestMatch = matchDifference;
                bestMatchObj = friendsList[i]
            } 
            
        }
        friendsList.push(newFriend);
        
        //5. send the data of the best match to survey.html and display in the modal
        res.json(bestMatchObj)
      
    })

}

module.exports = apiRoute;
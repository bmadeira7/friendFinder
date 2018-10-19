// I have a home html page that a contains a "go to survey button" that the user will click when they are ready to take the survey.

// Once that button is clicked the user will be taken to my "survey html page" which contains the 10 survey questions with the 1 thru 5 dropdown answers
//for each question

// QUESTION: HOW TO I SEND THE USER FROM THE HOME PAGE TO THE SURVEY PAGE?

// before answering the quiz questions, the user must input their name and a link to their photo.

// QUESTIONS: How do i store the name, picture and answers data?


// Then i need to convert each user's results into an array of numbers (ex: [5, 1, 4, 4, 5, 1, 2, 5, 4, 1]).
// Then compare the difference between current user's scores against those from other users, question by question. Add up the differences to calculate the totalDifference.
// Example: 
// User 1: [5, 1, 4, 4, 5, 1, 2, 5, 4, 1]
// User 2: [3, 2, 6, 4, 5, 1, 2, 5, 4, 1]
// Total Difference: 2 + 1 + 2 = 5

// Remember to use the absolute value of the differences. Put another way: no negative solutions! Your app should calculate both 5-3 and 3-5 as 2, and so on. 
// The closest match will be the user with the least amount of difference.

// Once you've found the current user's most compatible friend, display the result as a modal pop-up. The modal should display both the name and picture of the closest match.

//math.Abs()
var friendsList =
    [{
        name: "Ralph",
        photo: "https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/6/005/064/1bd/3435aa3.jpg",
        scores: [
            5,
            1,
            4,
            4,
            5,
            1,
            2,
            5,
            4,
            1
        ]
    },
    {
        name: "Cristy",
        photo: "https://images.pexels.com/photos/160699/girl-dandelion-yellow-flowers-160699.jpeg?auto=compress&cs=tinysrgb&h=350",
        scores: [
            3,
            1,
            3,
            4,
            3,
            1,
            2,
            5,
            4,
            5
        ]
    },
    {
        name: "Little Ricky",
        photo: "https://www.askideas.com/media/28/Skinny-Tiny-Man-Weightlifting-Funny-Image.jpg",
        scores: [
            5,
            5,
            5,
            5,
            5,
            5,
            5,
            5,
            5,
            5
        ]
    },
    {
        name: "Big Papa Flabberty",
        photo: "http://photos1.blogger.com/blogger/5562/1542/1600/DustRhodes.1.jpg",
        scores: [
            3,
            4,
            1,
            1,
            1,
            1,
            2,
            5,
            1,
            1
        ]
    },
    {
        name: "Old Man Winston",
        photo: "https://static.independent.co.uk/s3fs-public/thumbnails/image/2016/02/05/08/Antonio-Docampo-Garcia.jpg?w968h681",
        scores: [
            3,
            3,
            3,
            3,
            3,
            3,
            3,
            3,
            3,
            3
        ]
    },
    ]


    module.exports = friendsList;
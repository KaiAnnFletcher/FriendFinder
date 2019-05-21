//The important part
//Linking to our data source

var surveyData = require("../data/friends");

//Global variables for the logic
//var user = req.body; // user data defined within a variable

var yourMatch = []; // data to be filled in after calculation made 

//Now to set up the routing

module.exports = function(app) {

    //Get request displays the JSON data in friends.js
    app.get("/api/friends", function(req, res) {
        res.json(surveyData);
    });

    //Now here comes the post request which will handle the compatibility logic
    app.post("/api/friends", function(req, res) {
        console.log(req.body.scores);
        var  user = req.body

        for (var i=0; i < user.scores.length; i++) {
            user.scores[i]=parseInt(user.scores[i]);
        }

            totalDifference = 0

            
            for (var j = 0; j < surveyData[j].scores.length; j++)

            {
                difference += Math.abs(user.scores[i] - surveyData[i].scores[j]);

                if(totalDifference <= difference) {
                    yourMatch.name = surveyData[i].name;
                    yourMatch.photo = surveyData[i].photo;
                    yourMatch.difference = difference;
                };
            }
        });
    }

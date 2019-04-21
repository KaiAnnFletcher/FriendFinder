//The important part
//Linking to our data source

var surveyData = require("../data/surveyData");

//Global variables for the logic
var userScores =[];
var matchScores = surveyData.score;


//Now to set up the routing

module.exports = function(app) {

    //Get request displays the JSON data in friends.js
    app.get("/api/friends", function(req, res) {
        res.json(surveyData);
    });

    //Now here comes the post request which will handle the compatibility logic
    app.post("/api/friends", function(req, res) {

        for (i=0; i < matchScores.length; i++) {
            console.log(matchScores);

            difference = 0

            for (j = 0; j < userScores.length; j++)

            {
                difference += Math.abs(userScores[j] - matchScores[i]);

                if(difference <= yourMatch.difference) {
                    yourMatch.name = surveyData[i].name;
                    yourMatch.photo = surveyData[i].photo;
                    yourMatch.difference = difference;
                }
            }
        }
    });










}

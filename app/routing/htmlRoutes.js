//Path is a required dependency here so that we have the corect file path for out html

var path = require("path");

//Now for the routing that will be controlled by the app

module.exports = function(app) {
    //Route to survey page
    app.get("/survey", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/survey.html"));
    });

    //Default home page
    app.get("*", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/home.html"));
    });
};













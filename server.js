//Required dependencies
var express = require("express");
var path = require("path");

//Creates "express" server via Node
var app = express();

//Sets an initial port whcih will be used later in the listener
var PORT = process.env.PORT || 8080;

//Sets up data parsing for the express app
app.use(express.urlencoded({extended: true}));
app.use(express.json());

//Here, we are requirring out route files. These serve as a map for our server and how 
//it should respond when users visit the corresponding urls
require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);


//This listener code starts our server
app.listen(PORT, function(){
    console.log("App listening on PORT: " + PORT);
});
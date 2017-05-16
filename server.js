var express = require("express");
var override = require("method-override");
var bodyParser = require("body-parser");
var exphbs = require("express-handlebars");
var routes = require("./controllers/burger_controller.js");
var app = express();
var port = process.env.PORT || 3000;


app.engine("handlebars", exphbs({defaultLayout: "main"}));
app.set("view engine", "handlebars");

//body parser needs to be above the routes
app.use(bodyParser.urlencoded({extended: false}));
app.use("/burger", routes);
app.use("/public", express.static("public"));


app.listen(port);



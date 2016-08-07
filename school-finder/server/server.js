var express = require("express");
var path = require("path");

var app = express();
app.use(express.static(path.join("../app/dist")));
app.listen(7777, function() {
	console.log("Listening to port", 7777);
});
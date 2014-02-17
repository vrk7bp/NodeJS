var express = require('express')

var app = express();
var port = 5000;
app.listen(port);

console.log("Express server listening to port " + port);

app.get('/', function(req, res) {
	res.send("Hi");
});
var express = require('express');
var fs = require('fs');

var app = express.createServer(express.logger());
var filename = "index.html";
//var data = new Buffer(256, 'utf8');

app.use("/static",express.static(__dirname+"/static"));

app.get('/', function(request, response) {
  response.send(
    fs.readFileSync(filename).toString());
});

var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log("Listening on " + port);
});

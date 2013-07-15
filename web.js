var express = require('express');
var fs = require('fs');

var app = express.createServer(express.logger());
var filename = "index.html";
var data = new Buffer(200, 'utf8');

app.get('/', function(request, response) {
  response.send(
    fs.readFileSync(filename, encoding ='utf8',function (err, data) {
      if (err) {throw err;}
      //console.log(data);
      return data.toString();})
  );
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});

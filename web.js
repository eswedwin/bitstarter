var express = require('express');
var fs = require('fs');

var app = express.createServer(express.logger());
var filename = "index.html";

app.get('/', function(request, response) {
  var data = new Buffer(200, 'utf8');
  fs.readFileSync(filename, encoding ='utf8',function (err, data) {
    if (err) throw err;
    console.log(data);
    // buf.write(data);
  });
  response.send(data.toString('utf8'));
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});

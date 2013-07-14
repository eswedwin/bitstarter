var express = require('express');
var fs = require('fs');

var app = express.createServer(express.logger());
var filename = "/app/index.html";
var data = new Buffer(100);

app.get('/', function(request, response) {
  fs.readFileSync(filename, encoding ='ascii',function (err, data) {
    if (err) throw err;
    console.log(data);
    // buf.write(data);
  });
  response.send(data.toString('ascii'));
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});

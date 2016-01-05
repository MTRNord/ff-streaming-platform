var express = require("express");
var app = express();

/* serves main page */
app.get("/", function(req, res) {
  res.sendfile('public/index.htm');
});

/* serves all the static files */
app.get(/^(.+)$/, function(req, res){
  console.log('static file request : ' + req.params[0]);
  var str = req.params[0];
  var arr = str.split("/");
  if (arr[1] == "node_modules") {
    res.sendfile( __dirname + req.params[0]);
  }else {
    res.sendfile( __dirname + "/public/" + req.params[0]);
  }
});

var port = process.env.PORT || 80;
app.listen(port, function() {
 console.log("Listening on " + port);
});

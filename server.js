const http=require("http");
const app=require("./app")
var server = app.listen( 4000, function () {
    var port = server.address().port;
    console.log("Express is working on port " + port);
  });
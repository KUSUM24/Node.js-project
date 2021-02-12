var express = require("express");
var app = express();
var port = 5000;

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/Main/login.html");
});
app.get("/signup", (req, res) => {
  res.sendFile(__dirname + "/Main/signup.html");
});
app.listen(port, () => {
  console.log("Server listening on port " + port);
});

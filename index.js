var express = require("express");
var app = express();
var port = 3000;

app.use("/", (req, res) => {
  res.sendFile(__dirname + "/Main/login.html");
});
app.use("/signup", (req, res) => {
  res.sendFile(__dirname + "/Main/signup.html");
});
app.listen(port, () => {
  console.log("Server listening on port " + port);
});

var express = require("express");
var app = express();

app.set("view engine", "ejs");
app.use("/assets", express.static("css"));

app.get("/", (req, res) => {
  res.render("login");
  // res.sendFile(__dirname + "/Main/login.html");
});
app.get("/signup", (req, res) => {
  res.render("signup");
});
app.listen(5000);

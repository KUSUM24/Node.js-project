var express = require("express");
var app = express();

const connectDB = require("./DB/Connection");
connectDB();

app.use('/api/userModel',require('./Api/User'))
app.set("view engine", "ejs");
app.use("/assets", express.static("css"));

app.get("/", (req, res) => {
  res.render("login");
});
app.get("/signup", (req, res) => {
  res.render("signup");
});
app.listen(5000);

const express = require("express");
const mongoose = require("mongoose");
const User = require("../DB/User");
const route = express.Router();

route.post("/", async (req, res) => {
  const { name, Username } = req.body;
  let user = {};
  user.name = Name;
  user.Username = Username;
  let userModel = new User(user);
  await userModel.save();
  res.json(userModel); //it will respond whatever will be stored in database
});
module.exports = route;

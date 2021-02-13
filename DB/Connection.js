const mongoose = require("mongoose");

const URI =
  "mongodb+srv://NodeUser:nodejs@trio.umoww.mongodb.net/NodeDB?retryWrites=true&w=majority";

const connectDB = async () => {
  await mongoose.connect(URI, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  });
  console.log("DB connect");
};

module.exports = connectDB;

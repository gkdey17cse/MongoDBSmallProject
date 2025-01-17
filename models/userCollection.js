const mongoose = require("mongoose");
mongoose.connect("mongodb://127.0.0.1:27017/userDetails");
const userschema = mongoose.Schema({
  name: String,
  username: String,
  email: String,
  imgurl: String,
});

module.exports = mongoose.model("user", userschema);

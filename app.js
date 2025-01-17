const express = require("express");
const path = require("path");
const userModel = require(`./models/userCollection`);
const app = express();

app.set("view engine", "ejs");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
  res.render("index");
});

app.post("/create", async (req, res) => {
  let { name, username, email, url } = req.body;
  let user = await userModel.create({
    name: name,
    email: email,
    username: username,
    imgurl: url,
  });
  res.redirect("/viewuser");
});

app.post("/update", async (req, res) => {
  let updatedData = req.body;
  let { name, username, email, url, id } = req.body;
  const updatedUser = await userModel.findOneAndUpdate(
    { _id: id }, // Query condition to find the user
    {
      $set: {
        name: name,
        email: email,
        username: username,
        imgurl: url,
      },
    }, // Update operation
    { new: true } // Option to return the updated document
  );
  res.redirect("/viewuser");
});

app.get("/viewuser", async (req, res) => {
  let users = await userModel.find();
  res.render("read", { users });
});

app.get("/delete/:userid", async (req, res) => {
  const userid = req.params.userid;
  let deletedUser = await userModel.deleteOne({
    _id: userid,
  });
  res.redirect("/viewuser");
});

app.get("/update/:userid", async (req, res) => {
  let user = await userModel.findOne({ _id: req.params.userid });
  res.render("edit", { user });
});

app.listen(3000);

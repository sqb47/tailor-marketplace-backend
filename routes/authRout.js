const express = require("express");
const mongoose = require("mongoose");

const router = express.Router();

const User = mongoose.model("User");

router.post("/signup", async (req, res) => {
  console.log("--------------------------------------------");
  console.log(req.body);
  console.log("--------------------------------------------");
  const { email, password, number, fullname, accounttype } = req.body;
  try {
    const user = User({ email, password, fullname, number, accounttype });
    await user.save();
    res.send(req.body);
  } catch (err) {
    console.log("==============");
    res.send(err);
  }
});

router.get("/login", async (req, res) => {
  // const {email} = req.body
  const { email, password} = req.body;
  try {
    user = await User.find({ email: email }).exec();
    if (user[0].email == undefined){
      res.send('user not registered with email:'+email);
      return
    }
    if (password == user[0].password){
      res.send(user);
      return
    }else{
      res.send('Incorrect password');
      return
    }
    
  } catch (err) {
    console.log(err);
    res.send(err);
  }
});

module.exports = router;

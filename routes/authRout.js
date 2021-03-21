const express = require("express");
const mongoose = require("mongoose");

const router = express.Router()

const User = mongoose.model('User');

router.post("/signup",(req,res)=>{
    console.log(req.body)

    const {email,password,number} = req.body
    const user = User({email,password,number})
    user.save();
    res.send("signup")
})

router.get("/login",async (req,res)=>{
    user = await User.find({email:'saqib'}).exec();
    res.send(user)
})



module.exports = router
const express = require("express");
const mongoose = require("mongoose");

const router = express.Router();

const User = mongoose.model("User");
//================= signup =================================
router.post("/signup", async (req, res) => {
  console.log("--------------------------------------------");
  console.log(req.body);
  console.log("--------------------------------------------");
  const { email, password, number, fullname, accounttype } = req.body;
  try {
    const user = User({ email, password, fullname, number, accounttype });
    console.log("new user:", user)
    await user.save();
    res.send(req.body);
  } catch (err) {
    console.log("==============");
    res.send(err);
  }
});
//=========================


//=================== login ===============================
router.post("/login", async (req, res) => {
  // const {email} = req.body
  const { email, password} = req.body;
  try {
    user = await User.findOne({ email: email }).exec();
    if (user.email == undefined){
      res.send('user not registered with email:'+email);
      return
    }
    if (password == user.password){
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
//=========================

//==================== measurement ==============================
router.put("/measurement", async (req, res) => {
  console.log("--------------------------------------------");
  console.log(req.body);
  console.log("--------------------------------------------");
  const { 
    id,
    neck,
    shoulder,
    chest,
    waist,
    hips,
    slevelength,
    length,
    ghera,
    salwarlength,
   } = req.body;
  try {
    user = await User.findOne({ _id: id }).exec();
    var data={
      neck:neck,
      shoulder:shoulder,
      chest:chest,
      waist:waist,
      hips:hips,
      slevelength:slevelength,
      length:length,
      ghera:ghera,
      salwarlength:salwarlength,
    }
    user.measurement=data
    
    await user.save();
    
    res.send(user);
  } catch (err) {
    console.log("error",err);
    res.send(err);
  }
});
//=========================

//================ tailors ==================================
router.get("/tailors", async (req, res) => {
  try {
    user = await User.find({ accounttype: "Tailor" }).exec();
    console.log(user)
    res.send(user);
  } catch (err) {
    console.log("==============");
    res.send(err);
  }
});
//=========================

//====================== user ============================
router.put("/user", async (req, res) => {
  const { id, number, fullname } = req.body;
  try {
    user = await User.findOne({ _id: id }).exec();
    
    user.number=number
    user.fullname=fullname

    await user.save();
    res.send(user);

  } catch (err) {
    console.log("==============");
    res.send(err);
  }
});
//=========================

//==================== products ==============================
router.put("/products", async (req, res) => {
  const { 
    id,
    name,
    description,
    date,
    image,
    price,
    days } = req.body;
  try {
    user = await User.findOne({ _id: id }).exec();

    let product={
      name:name,
      description:description,
      date:date,
      image:image,
      price:price,
      days:days
    }

    user.products.push(product)

    await user.save();
    res.send(user);
  } catch (err) {
    console.log("==============");
    res.send(err);
  }
});
//=========================

//================== reviews ================================
router.put("/reviews", async (req, res) => {
  const { 
    id,
    name,
    email,
    stars,
    message,
    date,
    
   } = req.body;
  try {
    user = await User.findOne({ _id: id }).exec();
    let review={
      name:name,
      email:email,
      stars:stars,
      message:message,
      date:date,

    }

    user.reviews.push(review)

    await user.save();
    res.send(user);
  } catch (err) {
    console.log("==============");
    res.send(err);
  }
});
//=========================

//=================== order ===============================
router.put("/order", async (req, res) => {
  const { 
    id,
    date,
    email,
    name,
    productid,
    status,
   } = req.body;
  try {
    user = await User.findOne({ _id: id }).exec();
    
    let order={
      date:date,
      email:email,
      name:name,
      productid:productid,
      status:status,
    }

    user.orders.push(order)

    await user.save();
    res.send(user);
  } catch (err) {
    console.log("==============");
    res.send(err);
  }
});
//=========================
//=================== get updated user data ===============================
router.get("/user", async (req, res) => {
  const { 
    id,
   } = req.body;
  try {
    user = await User.findOne({ _id: id }).exec();
    
    res.send(user);
  } catch (err) {
    console.log("==============");
    res.send(err);
  }
});
//=========================

module.exports = router;

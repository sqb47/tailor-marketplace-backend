const mongoose = require("mongoose");
const { Schema } = mongoose;

const userSchema = new Schema({
  email: {
    type: String,
    unique: true,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  fullname: {
    type: String,
    required: true,
  },
  number: {
    type: Number,
    required: true,
  },
  accounttype: {
    type: String,
    required: true,
  },
  measurement:{
    neck:Number,
    shoulder:Number,
    chest:Number,
    waist:Number,
    hips:Number,
    slevelength:Number,
    length:Number,
    ghera:Number,
    salwarlength:Number,
  },
  products:[
    {
      tid:String,
      tname:String,
      temail:String,
      name:String,
      description:String,
      date:String,
      image:String,
      price:Number,
      days:Number
    }
  ],
  reviews:[
    {
      name:String,
      email:String,
      stars:Number,
      message:String,
      date:String,
    }
  ],
  orders:[
    {
      date:String,
      email:String,
      tid:String,
      tname:String,
      temail:String,
      productid:String,
      productname:String,
      status:String,
    }
  ]


});

mongoose.model("User", userSchema);

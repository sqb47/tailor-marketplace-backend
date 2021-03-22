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
});

mongoose.model("User", userSchema);

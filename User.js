//Variables Imports
const mongoose = require("mongoose");

//Schema Structure
const userSchema = mongoose.Schema({
  name: { type: String, required: true, minlenght: 4, maxlenght: 20 },
  email: { type: String, required: true, minlenght: 4, maxlenght: 23 },
  password: { type: String, required: true, minlenght: 8, maxlenght: 16 },
  admin: {type: Boolean, default: false},
  createdAt: { type: Date, default: Date.now }
});

//Export code
module.exports = mongoose.model("User", userSchema)
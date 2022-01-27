const mongoose = require("mongoose");

const AuthSchema = mongoose.Schema({
  nickName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique:true,
    match:/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/
  },
  password: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    default: "user"
  },
  created_at: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("auth", AuthSchema);

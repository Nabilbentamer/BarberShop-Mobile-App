const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserShema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  userType: {
    type: String,
    enum: ["user", "admin", "barberShop", "barber"],
    default: "user",
  },
});

const User = mongoose.model("User", UserShema);

module.exports = User;

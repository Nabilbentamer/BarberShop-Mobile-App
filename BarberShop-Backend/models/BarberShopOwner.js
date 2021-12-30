const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const BarberShopOwnerSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
});

const BarberShopOwner = mongoose.model(
  "BarberShopOwner",
  BarberShopOwnerSchema
);

module.exports = BarberShopOwner;

const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const BarberShopShema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  description: {
    type: String,
    required: true,
    trim: true,
  },
  address: {
    type: String,
    required: true,
  },
  location: {
    type: {
      type: String,
      enum: ["Point"],
    },
    coordinates: {
      type: [Number],
      index: "2dsphere",
    },
  },
  photoUrl: {
    type: String,
  },

  barberOwner: {
    type: Schema.Types.ObjectId,
    ref: "barberShopOwner",
  },
  barbers: [
    {
      type: Schema.Types.ObjectId,
      ref: "Barber",
    },
  ],

  average_review: {
    type: Number,
    default: 0,
  },
});

const barberShop = mongoose.model("barbershop", BarberShopShema);

module.exports = barberShop;

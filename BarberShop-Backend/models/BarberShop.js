const mongoose = require("mongoose");
const Shema = new mongoose.Shema();

const BarberShopShema = new Shema({
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
    formattedAddress: String,
  },
  photoUrl: {
    type: String,
  },

  barberOwner: {
    type: mongoose.Schema.type.ObjectId,
    ref: "barberShopOwner",
  },
  barbers: [
    {
      type: Shema.type.ObjectId,
      ref: "Barber",
    },
  ],
});

const barberShop = mongoose.model("barbershop", BarberShopShema);

module.exports = barberShop;

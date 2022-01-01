const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const BarberSchema = new Schema({
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
  services: [
    {
      service_name: String,
      service_price: Number,
      service_duration: Number,
    },
  ],
  barberShop: {
    type: Schema.Types.ObjectId,
    ref: "barbershop",
    required: true,
  },
});

const Barber = mongoose.model("barber", BarberSchema);

module.exports = Barber;

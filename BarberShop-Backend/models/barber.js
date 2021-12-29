const mongoose = require("mongoose");
const Schema = new mongoose.Schema();

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
      service_id: Object.ID,
      service_name: String,
      service_price: Number,
      service_duration: Number,
    },
  ],
});

const Barber = mongoose.model("Barber", BarberSchema);

module.exports = Barber;

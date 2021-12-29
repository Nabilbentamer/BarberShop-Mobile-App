const mongoose = require("mongoose");
const Schema = new mongoose.Schema();

const serviceSchema = new Schema({
  service_id: {
    type: String,
    required: true,
  },

  barber_id: {
    type: Schema.Types.ObjectId,
    ref: "Barber",
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  duration: {
    type: Number,
    required: true,
  },
});

const Service = mongoose.model("Service", serviceSchema);

module.exports = Service;

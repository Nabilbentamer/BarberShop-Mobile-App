const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const AppointementSchema = new Schema({
  client_id: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: "User",
  },
  barber_id: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: "barber",
  },
  services: [
    {
      service_name: String,
      service_price: Number,
      service_duration: Number,
    },
  ],
  date: {
    type: Date,
    required: true,
  },
  startTime: {
    type: String,
    required: true,
  },
  endTime: {
    type: String,
    required: true,
  },
  dateCreated: {
    type: Date,
    default: Date.now,
  },

  isCancelled: {
    type: Boolean,
    required: true,
    default: false,
  },
});

const Appointement = mongoose.model("Appointement", AppointementSchema);

module.exports = Appointement;

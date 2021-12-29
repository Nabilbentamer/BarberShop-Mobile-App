const mongoose = require("mongoose");
const Schema = new mongoose.Shema();

const AppointementSchema = new Schema({
  client_id: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
  barber_id: {
    type: Schema.Types.ObjectId,
    ref: "Barber",
  },
});

const Appointement = mongoose.model("Appointement", AppointementSchema);

module.exports = Appointement;

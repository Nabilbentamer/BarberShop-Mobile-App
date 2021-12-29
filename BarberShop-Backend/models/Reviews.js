const mongoose = require("mongoose");
const Schema = new mongoose.Schema();

const reviewSchema = new Schema({
  review_id: {
    type: String,
    required: true,
  },

  client: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },

  barber: {
    type: Schema.Types.ObjectId,
    ref: "Barber",
    required: true,
  },
  rating: {
    type: Number,
    required: true,
  },
  published_date: {
    type: Date,
    required: true,
    default: Date.now,
  },
  review_text: {
    type: String,
    required: true,
  },
});

const Review = mongoose.model("Review", reviewSchema);

module.exports = Review;

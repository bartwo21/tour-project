const mongoose = require("mongoose");

const tourSchema = mongoose.Schema(
  {
    date: {
      type: Array,
      required: true,
    },
    person: {
      type: Number,
      required: true,
    },
    nameSurname: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    ticket: {
      type: String,
      required: true,
    },
    location: {
      type: String,
      required: true,
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Tour = mongoose.model("Tour", tourSchema);

module.exports = Tour;

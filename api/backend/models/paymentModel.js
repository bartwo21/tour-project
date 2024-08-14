const mongoose = require("mongoose");

const paymentSchema = mongoose.Schema(
  {
    cardNumber: {
      type: String,
      required: false,
    },
    nameSurname: {
      type: String,
      required: false,
    },
    email: {
      type: String,
      required: false,
    },
    expDate: {
      type: String,
      required: false,
    },
    cvv: {
      type: String,
      required: false,
    },
    paypalNameSurname: {
      type: String,
      required: false,
    },
    paypalEmail: {
      type: String,
      required: false,
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

const Payment = mongoose.model("Payment", paymentSchema);

module.exports = Payment;

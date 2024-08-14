const asyncHandler = require("express-async-handler");
const Payment = require("../models/paymentModel");

const createPayment = asyncHandler(async (req, res) => {
  const {
    cardNumber,
    nameSurname,
    email,
    expDate,
    cvv,
    paypalNameSurname,
    paypalEmail,
  } = req.body;

  const payment = new Payment({
    cardNumber,
    nameSurname,
    email,
    expDate,
    cvv,
    paypalNameSurname,
    paypalEmail,
    user: req.user._id,
  });

  const createdPayment = await payment.save();
  res.status(201).json(createdPayment);
});

const getUserPayments = asyncHandler(async (req, res) => {
  const payments = await Payment.find({ user: req.user._id });
  res.json(payments);
});

const deletePayment = asyncHandler(async (req, res) => {
  const paymentId = req.params.id;

  const payment = await Payment.findById(paymentId);

  if (payment) {
    if (payment.user.toString() !== req.user._id.toString()) {
      res.status(401);
      throw new Error("Not authorized");
    }
    await Payment.deleteOne({ _id: paymentId });
    res.json({ message: "Payment removed" });
  } else {
    res.status(404);
    throw new Error("Payment not found");
  }
});

module.exports = { createPayment, getUserPayments, deletePayment };

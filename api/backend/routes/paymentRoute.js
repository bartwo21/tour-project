const express = require("express");
const router = express.Router();
const {
  createPayment,
  getUserPayments,
  deletePayment,
} = require("../controllers/paymentController");
const { protect } = require("../middleware/authMiddleware");

router.route("/").post(protect, createPayment).get(protect, getUserPayments);

router.route("/:id").delete(protect, deletePayment);

module.exports = router;

import express from "express";
const router = express.Router();
import {
  createPayment,
  getUserPayments,
  deletePayment,
} from "../controllers/paymentController.js";
import { protect } from "../middleware/authMiddleware.js";

router.route("/").post(protect, createPayment).get(protect, getUserPayments);

router.route("/:id").delete(protect, deletePayment);

export default router;

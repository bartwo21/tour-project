import express from "express";
const router = express.Router();
import {
  createTour,
  getUserTours,
  deleteTour,
} from "../controllers/tourController.js";
import { protect } from "../middleware/authMiddleware.js";

router.route("/").post(protect, createTour).get(protect, getUserTours);

router.route("/:id").delete(protect, deleteTour);

export default router;

const express = require("express");
const router = express.Router();
const {
  createTour,
  getUserTours,
  deleteTour,
} = require("../controllers/tourController");
const { protect } = require("../middleware/authMiddleware");

router.route("/").post(protect, createTour).get(protect, getUserTours);

router.route("/:id").delete(protect, deleteTour);

module.exports = router;

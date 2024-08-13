import asyncHandler from "express-async-handler";
import Tour from "../models/tourModel.js";

// @desc    Create a new tour
// @route   POST /api/tours
// @access  Private
const createTour = asyncHandler(async (req, res) => {
  const { date, person, nameSurname, email, ticket, location } = req.body;

  const tour = new Tour({
    date,
    person,
    nameSurname,
    email,
    ticket,
    location,
    user: req.user._id,
  });

  const createdTour = await tour.save();
  res.status(201).json(createdTour);
});

// @desc    Get user's tours
// @route   GET /api/tours
// @access  Private
const getUserTours = asyncHandler(async (req, res) => {
  const tours = await Tour.find({ user: req.user._id });
  res.json(tours);
});

// @desc    Delete a tour
// @route   DELETE /api/tours/:id
// @access  Private
const deleteTour = asyncHandler(async (req, res) => {
  const tour = await Tour.findById(req.params.id);

  if (tour) {
    if (tour.user.toString() !== req.user._id.toString()) {
      res.status(401);
      throw new Error("Not authorized");
    }
    await Tour.deleteOne({ _id: req.params.id });
    res.json({ message: "Tour removed" });
  } else {
    res.status(404);
    throw new Error("Tour not found");
  }
});

export { createTour, getUserTours, deleteTour };

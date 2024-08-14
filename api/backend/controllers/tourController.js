const asyncHandler = require("express-async-handler");
const Tour = require("../models/tourModel");

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

const getUserTours = asyncHandler(async (req, res) => {
  const tours = await Tour.find({ user: req.user._id });
  res.json(tours);
});

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

module.exports = { createTour, getUserTours, deleteTour };

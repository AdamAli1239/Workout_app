const workout = require("../models/workoutModel");

// This will be the function to get all workout documents in the database
const getAllWorkouts = async (req, res) => {
  res.status(200).json({ message: "in get all workouts" });
};

//this will be the function to get a specific workout document
const getWorkout = async (req, res) => {
  res.status(200).json({ message: "In getWorkout" });
};

// this will be to create a workout document

const createWorkout = async (req, res) => {
  res.status(200).json({ message: "In createWorkout" });
};

//this will be to update a workout
const updateWorkout = async (req, res) => {
  res.status(200).json({ message: "in updateWorkout" });
};

//this will be to delete a workout document

const deleteWorkout = async (req, res) => {
  res.status(200).json({ message: "In deleteWorkout" });
};
module.exports = {
  getAllWorkouts,
  getWorkout,
  createWorkout,
  updateWorkout,
  deleteWorkout,
};

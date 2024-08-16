const Workout = require("../models/workoutModel");
const mongoose = require("mongoose");
// This will be the function to get all workout documents in the database
const getAllWorkouts = async (req, res) => {
  const workouts = await Workout.find({});
  if (workouts.length === 0) {
    return res.status(404).json({ message: "No workouts available" });
  }
  res.status(200).json(workouts);
};

//this will be the function to get a specific workout document
const getWorkout = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ message: "invalid id" });
  }
  const userWorkout = await Workout.findById(id);
  res.status(200).json(userWorkout);
};

// this will be to create a workout document

const createWorkout = async (req, res) => {
  const { title, reps, load } = req.body;

  const workout = await Workout.create({
    title: title,
    reps: reps,
    load: load,
  });

  res.status(200).json(workout);
};

//this will be to update a workout
const updateWorkout = async (req, res) => {
  const { id } = req.params;
  const { title, reps, load } = req.body;
  const updatedWorkout = await Workout.findByIdAndUpdate(id, { ...req.body });
  res.status(200).json(updatedWorkout);
};

//this will be to delete a workout document

const deleteWorkout = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ message: "object id is not valid" });
  }
  const deletedWorkout = await Workout.findByIdAndDelete(id);
  if (deletedWorkout === null) {
    return res.status(404).json({ message: "No workout found with that id" });
  }
  res.status(200).json(deletedWorkout);
};
module.exports = {
  getAllWorkouts,
  getWorkout,
  createWorkout,
  updateWorkout,
  deleteWorkout,
};

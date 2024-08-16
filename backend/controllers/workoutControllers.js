const Workout = require("../models/workoutModel");

// This will be the function to get all workout documents in the database
const getAllWorkouts = async (req, res) => {
  const workouts = await Workout.find({});
  res.status(200).json(workouts);
};

//this will be the function to get a specific workout document
const getWorkout = async (req, res) => {
  const { id } = req.params;
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
  const deletedWorkout = await Workout.findByIdAndDelete(id);
  res.status(200).json(deletedWorkout);
};
module.exports = {
  getAllWorkouts,
  getWorkout,
  createWorkout,
  updateWorkout,
  deleteWorkout,
};

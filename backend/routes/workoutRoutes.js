const express = require("express");
const {
  getAllWorkouts,
  getWorkout,
  createWorkout,
  updateWorkout,
  deleteWorkout,
} = require("../controllers/workoutControllers");
const router = express.Router();

router.get("/", getAllWorkouts);

router.get("/:id", getWorkout);

router.post("/create", createWorkout);

router.patch("/:id", updateWorkout);

router.delete("/:id", deleteWorkout);

module.exports = router;

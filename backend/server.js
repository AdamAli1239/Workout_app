const mongoose = require("mongoose");
require("dotenv").config();

const workoutRoutes = require("./routes/workoutRoutes");

const express = require("express");

const app = express();

app.use(express.json());
app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

app.use("/api/workouts", workoutRoutes);
app.listen(process.env.PORT, () => {
  console.log(`listening on port ${process.env.PORT}`);
  mongoose
    .connect(process.env.CONNECTION_STRING)
    .then(console.log("Successfully connected to the Database"))
    .catch((error) => {
      console.log(error.message);
    });
});

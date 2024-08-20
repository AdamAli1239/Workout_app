import { useState } from "react";

const CreateWorkout = () => {
  const [title, setTitle] = useState("");
  const [reps, setReps] = useState("");
  const [load, setLoad] = useState("");
  const createPost = async () => {
    const response = await fetch("/api/workouts/create", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ title: title, reps: reps, load: load }),
    });
    console.log(response);
    const json = await response.json();
    if (response.ok) {
      setTitle("");
      setReps("");
      setLoad("");
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    createPost();
  };
  return (
    <form onSubmit={handleSubmit}>
      <label>Enter the name of the workout</label>
      <input
        type="text"
        required
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      ></input>

      <label>Enter the number of reps of the workout</label>
      <input
        type="number"
        min={0}
        required
        value={reps}
        onChange={(e) => setReps(e.target.value)}
      ></input>

      <label>Enter the load for the workout</label>
      <input
        type="number"
        required
        min={0}
        value={load}
        onChange={(e) => setLoad(e.target.value)}
      ></input>
      <button>Click me to submit :</button>
    </form>
  );
};

export default CreateWorkout;

import { useWorkoutContext } from "./hooks/useWorkoutContext";
const WorkoutDetails = ({ workout }) => {
  const { dispatch } = useWorkoutContext();
  const handleClick = async () => {
    const response = await fetch("/api/workouts/" + workout._id, {
      method: "DELETE",
    });
    const json = await response.json();
    if (response.ok) {
      dispatch({ type: "DELETE_WORKOUT", payload: json });
    }
  };
  return (
    <div>
      <h3>{workout.title}</h3>
      <p>The amount of reps for this exercise is: {workout.reps}</p>
      <p>The load for this exercise (in pounds) is: {workout.load}</p>
      <span onClick={handleClick}>Click to delete me</span>
    </div>
  );
};

export default WorkoutDetails;

import { useEffect } from "react";
import WorkoutDetails from "../components/WorkoutDetails";
import { useWorkoutContext } from "../components/hooks/useWorkoutContext";
const Home = () => {
  const { workouts, dispatch } = useWorkoutContext();
  useEffect(() => {
    const fetchWorkouts = async () => {
      const response = await fetch("/api/workouts");

      const json = await response.json();

      if (response.ok) {
        dispatch({ type: "SET_WORKOUTS", payload: json });
      }
    };
    fetchWorkouts();
  }, []);
  return (
    <div>
      {workouts &&
        workouts.map((workout) => (
          <WorkoutDetails workout={workout} key={workout._id} />
        ))}
    </div>
  );
};

export default Home;

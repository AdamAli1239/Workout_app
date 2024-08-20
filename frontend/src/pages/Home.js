import { useEffect, useState } from "react";
import WorkoutDetails from "../components/WorkoutDetails";

const Home = () => {
  const [workouts, setworkouts] = useState(null);
  useEffect(() => {
    const fetchWorkouts = async () => {
      const response = await fetch("/api/workouts");

      const json = await response.json();

      if (response.ok) {
        console.log("in here");
        setworkouts(json);
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

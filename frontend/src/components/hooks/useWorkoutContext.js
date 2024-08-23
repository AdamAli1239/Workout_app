import { useContext } from "react";
import { WorkoutContext } from "../../contexts/WorkoutContext";

export const useWorkoutContext = () => {
  const context = useContext(WorkoutContext);
  return context;
};

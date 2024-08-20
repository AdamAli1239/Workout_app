const WorkoutDetails = ({ workout }) => {
  const handleTitleClick = () => {
    console.log("hi");
  };
  return (
    <div>
      <h3 onClick={handleTitleClick}>{workout.title}</h3>
      <p>The amount of reps for this exercise is: {workout.reps}</p>
      <p>The load for this exercise (in pounds) is: {workout.load}</p>
    </div>
  );
};

export default WorkoutDetails;

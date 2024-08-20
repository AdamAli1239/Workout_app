import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav>
      <h1>Workouts4U</h1>
      <Link to="/create">Click me to go somewhere</Link>
    </nav>
  );
};

export default NavBar;

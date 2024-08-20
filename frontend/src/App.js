import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import CreateWorkout from "./components/CreateWorkout";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />}></Route>

          <Route path="/create" element={<CreateWorkout />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

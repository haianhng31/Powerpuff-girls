import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar.js";
import TravelTab from "./Pages/TravelTab.js";
import Home from "./Pages/Home.js";
import HealthTab from "./Pages/HealthTab.js";
import LandingPage from "./Pages/LandingPage";

function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/HealthTab" element={<HealthTab />} />
          <Route path="/TravelTab" element={<TravelTab />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar.js";
import TravelTab from "./Pages/TravelTab.js";
import Home from "./Pages/Home.js";
import HealthTab from "./Pages/HealthTab.js";
import ArticleForm from "./Components/Article/ArticleForm.js";
import LandingPage from "./Pages/LandingPage";

function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          {/* Landing page as default route */}
          <Route path="/" element={<LandingPage />} />

          <Route path="/Home" element={<Home />} />
          <Route path="/HealthTab" element={<HealthTab />} />
          <Route path="/TravelTab" element={<TravelTab />} />
        </Routes>
        <ArticleForm />
      </Router>
    </div>
  );
}

export default App;

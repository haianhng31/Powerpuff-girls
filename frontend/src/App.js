import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar.js';
import HealthTab from './Components/HealthTab/HealthTab.js';
import TravelingTab from './Components/TravelTab/TravelTab.js';

function App() {
  return (
    <div>
      <Router>
        <Navbar />
          <Routes>
            <Route path="/HealthTab" element={<HealthTab />} />
            <Route path="/TravelTab" element={<TravelingTab />} />
          </Routes>
      </Router>
    </div>
  );
}

export default App;

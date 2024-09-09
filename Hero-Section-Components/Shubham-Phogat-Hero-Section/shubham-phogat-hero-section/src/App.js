import { Route, Routes } from "react-router-dom";
import "./App.css";
import HeroSection from "./page/HeroSection.js";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HeroSection />} />
      </Routes>
    </div>
  );
}

export default App;

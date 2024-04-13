import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Unit1 from "./components/units/unit1";
import DetailsPage from "./details";
import "./App.css";
import Learning from "./components/learning";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Learning />} />
          <Route path="/Learning" element={<Unit1 />} />
          <Route path="/details/:lessonId" element={<DetailsPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

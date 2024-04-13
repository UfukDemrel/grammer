import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Unit from "./components/units/unit";
import DetailsPage from "./details";
import Header from "./components/header";
import "./App.css";
import Learning from "./components/learning";

function App() {
  return (
    <div className="container transation">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Learning />} />
          <Route path="/Learning" element={<Unit />} />
          <Route path="/details/:lessonId" element={<DetailsPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Unit1 from "./components/units/unit1";
import DetailsPage from "./details";
import Header from "./components/header";
// import Time from "./components/time";
import "./App.css";
import Learning from "./components/learning";

function App() {
  return (
    <div className="container transation">
      <Router>
        <Header />
        {/* <Time /> */}
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

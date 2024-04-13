import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Unit1 from "../components/units/unit1";
import DetailsPage from "../details";

function Part1() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Unit1 />} />
          <Route path="/details/:id" element={<DetailsPage />} />
        </Routes>
      </Router>
    </>
  );
}

export default Part1;

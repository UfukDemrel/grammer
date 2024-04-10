  import React from "react";
  import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
  import Unit1 from "./components/units/unit1";
  import DetailsPage from "./details";
  import Header from "./components/header";
  import Time from "./components/time";
  import "./App.css";

  function App() {
    return (
      <div className="container">
        <Router>
          <Header />
          <Time />
          <Routes>
            <Route path="/" element={<Unit1 />} />
            <Route path="/details/:id" element={<DetailsPage />} />
          </Routes>
        </Router>
      </div>
    );
  }

  export default App;

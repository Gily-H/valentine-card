import React from "react";
import { Routes, Route } from "react-router-dom";
import LandingPage from "./components/LandingPage";
import CardHomePage from "./components/CardHomePage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/cardpage" element={<CardHomePage />} />
    </Routes>
  );
}

export default App;

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import LandingPage from "./components/LandingPage";
import ResumeForm from "./components/ResumeForm";
import ATSChecker from "./components/ATSChecker";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/resume-builder" element={<ResumeForm />} />
        <Route path="/ats-checker" element={<ATSChecker />} />
      </Routes>
    </Router>
  );
}

export default App;
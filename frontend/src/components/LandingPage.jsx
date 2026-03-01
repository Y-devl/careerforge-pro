import React from "react";
import { Link } from "react-router-dom";
import "../../src/components/LandingPage.jsx";

function LandingPage() {
  return (
    <div className="landing-container">
      <h1 className="landing-title">Welcome to CareerForge</h1>
      <p className="landing-subtitle">
        Build your professional resume & check ATS score instantly!
      </p>
      <div className="landing-buttons">
        <Link to="/resume-builder">
          <button className="landing-button">Start Building Resume</button>
        </Link>
        <Link to="/ats-checker">
          <button className="landing-button">Check ATS Score</button>
        </Link>
      </div>
    </div>
  );
}

export default LandingPage;
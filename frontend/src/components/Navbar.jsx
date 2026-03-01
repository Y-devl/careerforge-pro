import React from "react";
import { Link } from "react-router-dom";
import "./LandingPage.css";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-logo">CareerForge</div>
      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/resume-builder">Resume Builder</Link>
        <Link to="/ats-checker">ATS Checker</Link>
      </div>
    </nav>
  );
}

export default Navbar;
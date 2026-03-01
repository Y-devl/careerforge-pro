import React, { useState } from "react";
import "../../src/ATSChecker.css";

function ATSChecker() {
  const [resumeText, setResumeText] = useState("");
  const [jdText, setJDText] = useState("");
  const [resumeFile, setResumeFile] = useState("");
  const [score, setScore] = useState(null);

  const handleResumeUpload = (e) => {
    const file = e.target.files[0];
    if (file) setResumeFile(file.name);
  };

  const handleCheckScore = () => {
    if (resumeText || resumeFile) {
      const dummyScore = Math.floor(Math.random() * 21) + 80; // 80-100%
      setScore(dummyScore);
    } else {
      alert("Please paste or upload your resume first!");
    }
  };

  return (
    <div className="ats-wrapper">
      <div className="ats-card">
        <h2>ATS Score Checker</h2>

        <div className="input-section">
          <label>Paste or Upload Resume:</label>
          <textarea
            placeholder="Paste your resume here..."
            value={resumeText}
            onChange={(e) => setResumeText(e.target.value)}
          />
          <input
            type="file"
            accept=".pdf,.doc,.docx"
            onChange={handleResumeUpload}
          />
          {resumeFile && <p className="file-name">Uploaded: {resumeFile}</p>}
        </div>

        <div className="input-section">
          <label>Paste Job Description (JD):</label>
          <textarea
            placeholder="Paste JD here..."
            value={jdText}
            onChange={(e) => setJDText(e.target.value)}
          />
        </div>

        <button className="ats-btn" onClick={handleCheckScore}>
          Check ATS Score
        </button>

        {score !== null && <p className="ats-score">Your ATS Score: {score}%</p>}
      </div>
    </div>
  );
}

export default ATSChecker;
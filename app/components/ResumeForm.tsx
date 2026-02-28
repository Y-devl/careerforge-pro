"use client";
import { useState } from "react";
import ATSScore from "./ATSScore";

export default function ResumeForm() {
  const [name, setName] = useState("");
  const [skills, setSkills] = useState("");
  const [bullet, setBullet] = useState("");
  const [jd, setJd] = useState("");
  const [optimized, setOptimized] = useState("");
  const [score, setScore] = useState(0);

  const rewriteBullet = async () => {
    const res = await fetch("/api/ai", {
      method: "POST",
      body: JSON.stringify({
        type: "rewrite",
        content: bullet,
        keyword: "Leadership",
      }),
    });

    const data = await res.json();
    setOptimized(data.result);
  };

  const analyzeJD = async () => {
    const res = await fetch("/api/ai", {
      method: "POST",
      body: JSON.stringify({
        type: "analyze",
        content: jd,
      }),
    });

    const data = await res.json();
    const keywords = data.result.split(",");

    let match = 0;
    keywords.forEach((k: string) => {
      if ((skills + optimized).toLowerCase().includes(k.trim().toLowerCase())) {
        match++;
      }
    });

    const finalScore = Math.round((match / keywords.length) * 100);
    setScore(finalScore);
  };

  return (
    <div className="bg-white p-6 rounded-2xl shadow-lg">
      <h2 className="text-xl font-bold mb-4">CareerForge Pro</h2>

      <input
        className="w-full border p-2 rounded-lg mb-3"
        placeholder="Full Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <input
        className="w-full border p-2 rounded-lg mb-3"
        placeholder="Skills (comma separated)"
        value={skills}
        onChange={(e) => setSkills(e.target.value)}
      />

      <textarea
        className="w-full border p-2 rounded-lg mb-3"
        placeholder="Experience Bullet"
        value={bullet}
        onChange={(e) => setBullet(e.target.value)}
      />

      <button
        onClick={rewriteBullet}
        className="bg-blue-600 text-white px-4 py-2 rounded-lg mb-3"
      >
        Optimize Bullet with AI
      </button>

      {optimized && (
        <div className="bg-green-100 p-3 rounded-lg mb-3">
          {optimized}
        </div>
      )}

      <textarea
        className="w-full border p-2 rounded-lg mb-3"
        placeholder="Paste Job Description"
        value={jd}
        onChange={(e) => setJd(e.target.value)}
      />

      <button
        onClick={analyzeJD}
        className="bg-purple-600 text-white px-4 py-2 rounded-lg"
      >
        Calculate ATS Score
      </button>

      {score > 0 && <ATSScore score={score} />}
    </div>
  );
}
const Resume = require("../models/Resume");

// Extract keywords from JD
const extractKeywords = (jd) => {
  if (!jd) return [];
  return jd.toLowerCase().split(/[\s,.-]+/).filter((w, i, arr) => w.length > 2 && arr.indexOf(w) === i);
};

exports.createResume = async (req, res) => {
  try {
    const { skills, jobdesc } = req.body;
    const skillArray = skills.map((s) => s.trim().toLowerCase());
    const jdKeywords = extractKeywords(jobdesc);
    let matched = 0;
    skillArray.forEach((skill) => {
      if (jdKeywords.includes(skill)) matched++;
    });
    const atsScore = skillArray.length ? Math.round((matched / skillArray.length) * 100) : 0;

    const newResume = new Resume({ ...req.body, atsScore });
    await newResume.save();
    res.status(201).json(newResume);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getResumes = async (req, res) => {
  try {
    const resumes = await Resume.find();
    res.json(resumes);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
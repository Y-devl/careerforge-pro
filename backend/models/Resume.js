const mongoose = require("mongoose");

const ResumeSchema = new mongoose.Schema({
  name: String,
  email: String,
  phone: String,
  linkedin: String,
  github: String,
  summary: String,
  skills: [String],
  education: [
    {
      college: String,
      degree: String,
      startYear: String,
      endYear: String,
      cgpa: String,
    },
  ],
  experience: [
    {
      company: String,
      role: String,
      startDate: String,
      endDate: String,
      responsibilities: String,
    },
  ],
  projects: [
    {
      name: String,
      description: String,
      tech: String,
      link: String,
    },
  ],
  certifications: [String],
  awards: [String],
  jobdesc: String,
  atsScore: Number,
});

module.exports = mongoose.model("Resume", ResumeSchema);
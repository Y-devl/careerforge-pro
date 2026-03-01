import React, { useState, useRef } from "react";
import html2pdf from "html2pdf.js";
import "../../src/ResumeForm.css";

const ResumeForm = () => {
  const resumeRef = useRef();

  const [formData, setFormData] = useState({
    name: "",
    title: "",
    linkedin: "",
    phone: "",
    email: "",
    objective: "",
    jobRole: "",
    company: "",
    duration: "",
    description: "",
    projectTitle: "",
    projectDescription: "",
    degree: "",
    major: "",
    college: "",
    eduDuration: "",
    skills: "",
    certifications: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const downloadPDF = () => {
    const element = resumeRef.current;

    const opt = {
      margin: 0,
      filename: "resume.pdf",
      image: { type: "jpeg", quality: 1 },
      html2canvas: { scale: 2 },
      jsPDF: {
        unit: "px",
        format: [794, 1123],
        orientation: "portrait",
      },
    };

    html2pdf().set(opt).from(element).save();
  };

  return (
    <div className="resume-container">
      
      {/* LEFT SIDE FORM */}
      <div className="form-section">
        <h2>Build Your Resume</h2>

        <input name="name" placeholder="Full Name" onChange={handleChange} />
        <input name="title" placeholder="Job Title" onChange={handleChange} />
        <input name="linkedin" placeholder="LinkedIn URL" onChange={handleChange} />
        <input name="phone" placeholder="Mobile" onChange={handleChange} />
        <input name="email" placeholder="Email" onChange={handleChange} />

        <textarea name="objective" placeholder="Objective" onChange={handleChange} />

        <h3>Experience</h3>
        <input name="jobRole" placeholder="Job Role" onChange={handleChange} />
        <input name="company" placeholder="Company" onChange={handleChange} />
        <input name="duration" placeholder="Duration" onChange={handleChange} />
        <textarea
          name="description"
          placeholder="Each point in new line"
          onChange={handleChange}
        />

        <h3>Projects</h3>
        <input name="projectTitle" placeholder="Project Title" onChange={handleChange} />
        <textarea
          name="projectDescription"
          placeholder="Each point in new line"
          onChange={handleChange}
        />

        <h3>Education</h3>
        <input name="degree" placeholder="Degree" onChange={handleChange} />
        <input name="major" placeholder="Major" onChange={handleChange} />
        <input name="college" placeholder="College" onChange={handleChange} />
        <input name="eduDuration" placeholder="Duration" onChange={handleChange} />

        <h3>Skills</h3>
        <textarea
          name="skills"
          placeholder="Comma separated (React, Node, SQL)"
          onChange={handleChange}
        />

        <h3>Certifications</h3>
        <textarea
          name="certifications"
          placeholder="Each certificate in new line"
          onChange={handleChange}
        />

        <button className="download-btn" onClick={downloadPDF}>
          Download PDF
        </button>
      </div>

      {/* RIGHT SIDE PREVIEW */}
      <div className="preview-wrapper">
        <div className="preview-section" ref={resumeRef}>
          <h2>{formData.name}</h2>
          <p className="title">{formData.title}</p>

          <p>
            {formData.linkedin && (
              <a href={formData.linkedin} target="_blank" rel="noreferrer">
                LinkedIn
              </a>
            )}
            {formData.phone && ` | ${formData.phone}`}
            {formData.email && ` | ${formData.email}`}
          </p>

          {formData.objective && (
            <>
              <h3>Objective</h3>
              <p>{formData.objective}</p>
            </>
          )}

          {(formData.jobRole || formData.company) && (
            <>
              <h3>Experience</h3>
              <div className="row">
                <strong>
                  {formData.jobRole} | {formData.company}
                </strong>
                <span>{formData.duration}</span>
              </div>
              <ul>
                {formData.description
                  .split("\n")
                  .filter((line) => line.trim() !== "")
                  .map((line, index) => (
                    <li key={index}>{line}</li>
                  ))}
              </ul>
            </>
          )}

          {formData.projectTitle && (
            <>
              <h3>Projects</h3>
              <strong>{formData.projectTitle}</strong>
              <ul>
                {formData.projectDescription
                  .split("\n")
                  .filter((line) => line.trim() !== "")
                  .map((line, index) => (
                    <li key={index}>{line}</li>
                  ))}
              </ul>
            </>
          )}

          {formData.degree && (
            <>
              <h3>Education</h3>
              <div className="row">
                <strong>
                  {formData.degree}
                  {formData.major && ` - ${formData.major}`}
                </strong>
                <span>{formData.eduDuration}</span>
              </div>
              <p>{formData.college}</p>
            </>
          )}

          {formData.skills && (
            <>
              <h3>Skills</h3>
              <ul>
                {formData.skills.split(",").map((skill, index) => (
                  <li key={index}>{skill.trim()}</li>
                ))}
              </ul>
            </>
          )}

          {formData.certifications && (
            <>
              <h3>Certifications</h3>
              <ul>
                {formData.certifications
                  .split("\n")
                  .filter((line) => line.trim() !== "")
                  .map((line, index) => (
                    <li key={index}>{line}</li>
                  ))}
              </ul>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default ResumeForm;
import React from "react";
import "../styles/Experience.css";

function Experience() {
  return (
    <section id="experience" className="experience-section">
      <h2>Experience</h2>
      <div className="experience-list">
        {/* Example of a job entry, replicate this structure for each job experience */}
        <div className="experience-item">
          <h3>Job Title at Company</h3>
          <p className="experience-duration">Month Year - Month Year</p>
          <ul>
            <li>Detail of your responsibility or achievement 1</li>
            <li>Detail of your responsibility or achievement 2</li>
            {/* Add more details as needed */}
          </ul>
        </div>
        {/* Repeat for other experiences */}
      </div>
    </section>
  );
}

export default Experience;

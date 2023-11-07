// src/components/Projects.js

import React from "react";
import "../styles/Projects.css";

function Projects() {
  // Placeholder for actual project data
  const projects = [
    {
      title: "Project One",
      description: "A short description of my first project.",
      image: "url_to_project_image",
      link: "link_to_live_project",
    },
    // Add more projects as needed
  ];

  return (
    <section id="projects" className="projects-section">
      <h2>Projects</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <img
              src={project.image}
              alt={project.title}
              className="project-image"
            />
            <div className="project-info">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <a href={project.link} target="_blank" rel="noopener noreferrer">
                View Project
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;

import React from "react";
import portfolioImage from '../assets/portfolio.png'
import pawmeetImage from '../assets/paw-meet.png'
import "../styles/Projects.css";

function Projects() {
  const projects = [
    {
      title: "Paw-Meet",
      description:
        "Social application that implements a scoring algorithm that compares breed traits to a user quiz and calculates the best breed match with 80+% accuracy.",
      image: pawmeetImage,
      link: "https://github.com/Dusttoo/PawMeet",
      technologies: ["React", "Redux", "Python", "Flask"],
    },
    {
      title: "Full Stack Developer Portfolio",
      description:
        "This portfolio showcases a range of projects including web applications, tools, and libraries. Highlighting my skills in full stack development, the portfolio features interactive elements, a cohesive theme, and detailed project explanations.",
      image: portfolioImage,
      link: "https://github.com/Dusttoo/portfolio-2023",
      technologies: [
        "HTML",
        "CSS",
        "JavaScript",
        "React",
        "Node.js",
        "Contentful",
        "Material UI",
      ],
    },
    {
      title: "Music Hub - Spotify Clone",
      description:
        "Spotify clone with an engineered algorithm to suggest 5 songs based on the user's current playlists.",
      image:
        "https://github.com/nevinchow/SpotifyProject/raw/SiteScreenshots/react-app/src/images/site-screenshots/Playlist-View.png",
      link: "https://github.com/nevinchow/MusicHub",
      technologies: ["React", "Redux", "Python", "Flask"],
    },
    {
      title: "PFLAG East Texas",
      description: "Optimized SEO increasing traffic by over 50%.",
      image: "https://i.imgur.com/Iv507eu.png",
      link: "https://pflageasttexas.org/",
      technologies: ["WordPress"],
    },
    {
      title: "Texas Top Notch Frenchies",
      description:
        "Business application tailored to the owner's needs and built with an admin portal that allows the owner to customize 100% of the website in a user-friendly way.",
      image: "https://i.imgur.com/l7ADdiw.png",
      link: "https://texastopnotchfrenchies.com/",
      technologies: ["React", "Redux", "Python", "Flask", "AWS"],
    },
    {
      title: "Kelp - Yelp Clone",
      description:
        "Yelp clone for the fictional world of Bikini Bottom. Utilizes Google API to implement custom maps and markers for 20+ custom locations in the fantasy world.",
      image: "https://i.imgur.com/dWb7JUR.png",
      link: "https://github.com/Dusttoo/kelp",
      technologies: [
        "React",
        "Redux",
        "Express",
        "Sequelize",
        "Google Maps API",
      ],
    },
  ];

  return (
    <section id="projects" className="projects-section section-container">
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

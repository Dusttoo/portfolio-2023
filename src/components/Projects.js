import React from "react";
import "../styles/Projects.css";

function Projects() {
  const projects = [
    {
      title: "Paw-Meet",
      description:
        "Social application that implements a scoring algorithm that compares breed traits to a user quiz and calculates the best breed match with 80+% accuracy.",
      image:
        "https://camo.githubusercontent.com/842f8fdde5f60bcff4c11be7772ed9f2d3bdc842ab5c583fcb81e1705b6af8f0/68747470733a2f2f6d656469612e67697068792e636f6d2f6d656469612f4a364932534f3543554c394e656562374f452f67697068792e676966",
      link: "https://github.com/Dusttoo/PawMeet",
      technologies: ["React", "Redux", "Python", "Flask"],
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

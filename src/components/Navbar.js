import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import "../styles/Navbar.css";
import { sectionIds } from "../data/sections";

function Navbar() {
  const [activeSection, setActiveSection] = useState("home");
  const [isNavOpen, setIsNavOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setActiveSection(getCurrentSection());
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

const getCurrentSection = () => {
  let current = "";
  for (const id of sectionIds) {
    const section = document.getElementById(id);
    // Check if the section exists before trying to access its properties
    if (
      section &&
      window.scrollY >= section.offsetTop &&
      window.scrollY < section.offsetTop + section.offsetHeight
    ) {
      current = id;
      break;
    }
  }
  return current;
};

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <>
      <button
        onClick={toggleNav}
        className={`navbar-toggle ${isNavOpen ? "open" : ""}`}
      >
        <FontAwesomeIcon icon={faBars} />
      </button>
      <header className={`navbar ${isNavOpen ? "open" : ""}`}>
        <div className="navbar-header">
          <h1>Dusty Mumphrey</h1>
          <p>Full Stack Software Engineer</p>
          <p>
            Full Stack Software Engineer | Innovative Solutions, Impactful
            Results
          </p>
        </div>
        <nav className="side-nav">
          {sectionIds.map((id) => (
            <Link
              key={id}
              to={id}
              smooth={true}
              duration={500}
              className={activeSection === id ? "active" : ""}
              onClick={() => setIsNavOpen(false)}
            >
              {id.charAt(0).toUpperCase() + id.slice(1)}
            </Link>
          ))}
        </nav>
        <div className="social-media">
          <a
            href="https://linkedin.com/in/dusty-mumphrey"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
          <a
            href="https://github.com/dusttoo"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faGithub} />
          </a>
        </div>
      </header>
    </>
  );
}

export default Navbar;

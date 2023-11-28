import React, { useState, useEffect } from "react";
import { Link, scroller } from "react-scroll";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Skills from "./components/Skills";

const sectionIds = [
  "home",
  "skills",
  "about",
  "experience",
  "projects",
  "contact",
];

function App() {
  const [activeSection, setActiveSection] = useState("home");

  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setActiveSection(getCurrentSection());

      if (window.scrollY > 100) {
        setShowBackToTop(true);
      } else {
        setShowBackToTop(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

    const getCurrentSection = () => {
      let current = "";
      for (const id of sectionIds) {
        const section = document.getElementById(id);
        const scrollPosition = window.scrollY;
        if (
          section.offsetTop <= scrollPosition &&
          section.offsetTop + section.offsetHeight > scrollPosition
        ) {
          current = id;
          break;
        }
      }
      return current;
    };

  const scrollToPreviousSection = () => {
    // Assuming 'sectionIds' is an array of your section ids ordered as they appear on the page
    const currentIndex = sectionIds.findIndex((id) => id === activeSection);
    const previousSection =
      currentIndex > 0 ? sectionIds[currentIndex - 1] : sectionIds[0];

    // Using 'react-scroll' to navigate to the specific section
    // Replace '500' with the duration of scroll animation in milliseconds
    scroller.scrollTo(previousSection, {
      duration: 500,
      smooth: true,
      offset: -70, // Adjust this value based on your fixed header height or other factors
    });
  };
  return (
    <div className="App">
      <Navbar />
      <div className="main-content section-with-tint">
        {showBackToTop && (
          <button
            onClick={scrollToPreviousSection}
            className="back-to-top show"
          >
            <FontAwesomeIcon icon={faArrowUp} />
          </button>
        )}
        <Home />
        <Skills />
        <About />
        <Experience />
        <Projects />
        <Contact />
      </div>
    </div>
  );
}

export default App;

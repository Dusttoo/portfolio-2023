import React, { useState, useEffect } from "react";
import { scroller } from "react-scroll";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
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
import { contentfulClient } from "./services/Contentful";
import Blog from "./components/Blog";
import BlogPost from "./components/BlogPost";
import { sectionIds } from "./data/sections";

function App() {
  const [activeSection, setActiveSection] = useState("home");

  const [showBackToTop, setShowBackToTop] = useState(false);
  const [blogData, setBlogData] = useState([]);

  useEffect(() => {
    contentfulClient.getEntries().then((entries) => {
      const blogPosts = entries.items.filter(
        (entry) => entry.sys.contentType.sys.id === "pageBlogPost"
      ); 
      
      setBlogData(blogPosts);
    });
  }, []);

useEffect(() => {
  const handleScroll = () => {
    const current = getCurrentSection();
    if (current) {
      setActiveSection(current);
      if (window.scrollY > 100) {
        setShowBackToTop(true);
      } else {
        setShowBackToTop(false);
      }
    }
  };

  window.addEventListener("scroll", handleScroll);
  return () => window.removeEventListener("scroll", handleScroll);
}, []);

const getCurrentSection = () => {
  let current = "";
  for (const id of sectionIds) {
    const section = document.getElementById(id);
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

  const scrollToPreviousSection = () => {
    const currentIndex = sectionIds.findIndex((id) => id === activeSection);
    const previousSection =
      currentIndex > 0 ? sectionIds[currentIndex - 1] : sectionIds[0];

    scroller.scrollTo(previousSection, {
      duration: 500,
      smooth: true,
      offset: -70,
    });
  };

    const HomePage = () => (
      <>
        <Home />
        <Skills />
        <About />
        <Experience />
        <Projects />
        <Contact />
        <Blog blogData={blogData} />
      </>
    );

  return (
    <Router>
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
          <Routes>
            <Route path="/" exact element={<HomePage />} />
            <Route path="/blog/:slug" element={<BlogPost />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;

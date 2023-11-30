import React, { useState, useEffect } from "react";
import Game from "./Game";
import headshot from "../assets/dusty-token.png";
import "../styles/Home.css";

function Home() {
   const [isSticky, setIsSticky] = useState(false);

   useEffect(() => {
     const handleScroll = () => {
       if (window.scrollY > window.innerHeight) {
         setIsSticky(true);
       } else {
         setIsSticky(false);
       }
     };

     window.addEventListener("scroll", handleScroll);

     return () => {
       window.removeEventListener("scroll", handleScroll);
     };
   }, []);
  return (
    <section className="home section-container" id="home">
      <div className={`intro ${isSticky ? "sticky-avatar" : ""}`}>
        <img
          src={headshot}
          alt="Dusty Mumphrey"
          className="headshot"
        />
        <h1>Hi, I'm Dusty</h1>
        <p>
          I'm a full-stack software engineer on a mission to create tech magic
          and make the world a better place, one line of code at a time.
        </p>
        <a href="#projects" className="call-to-action">
          View My Projects
        </a>
      </div>
      <Game />
    </section>
  );
}

export default Home;

import React from "react";
import resume from "../assets/dusty-resume.pdf"
import "../styles/About.css";

function About() {
  return (
    <section id="about" className="about-section section-container">
      <h2>About Me</h2>
      <div>
        <p className="about-para">
          <span className="about-topic">Hey there, I'm Dusty</span> – your
          friendly neighborhood tech nerd since the 6th grade (much to my
          parents' relief, I did put that disassembled computer back together!).
          I've been on a quest to unravel the mysteries of technology ever
          since.
        </p>
        <p className="about-para">
          💡 <span className="about-topic">Why So Curious?</span> Well, they say
          curiosity killed the cat, but it only makes me more tech-savvy! I'm
          that guy who always asks, "Why not?" and loves digging deep to find
          tech solutions that make life smoother, faster, and just plain better.
        </p>
        <p className="about-para">
          🌟 <span className="about-topic">Innovation is My Middle Name</span> –
          Okay, it's not officially, but it might as well be! I thrive on
          pushing boundaries, embracing new challenges, and crafting innovative
          solutions. If it involves code, creativity, and making things work
          better, I'm all in.
        </p>
        <p className="about-para">
          🧩 <span className="about-topic">Adaptability is My Superpower</span>{" "}
          – In the ever-evolving tech landscape, being adaptable is like having
          a superpower. I've got the ability to pivot, learn, and tackle new
          challenges head-on, whether it's Python, JavaScript, or wrangling a
          pack of mischievous penguins (I'm kidding... mostly).
        </p>
        <p className="about-para">
          🐧 <span className="about-topic">Penguins & Pandas Enthusiast</span> –
          When I'm not writing code, you might find me hanging out with my
          favorite penguins (or pandas, you know, depending on the day). I've
          got a soft spot for our feathered and furry friends, and I'm on a
          mission to incorporate their efficiency and cuteness into every
          project I undertake.
        </p>
        <p className="about-para">
          💬 <span className="about-topic">Let's Talk Tech!</span> I'm always up
          for a tech chat, whether it's about your latest project, the newest
          JavaScript framework, or the best way to build a robo-dog (just
          kidding... but I'm open to ideas!). Feel free to reach out, and let's
          innovate together.
        </p>
      </div>
      <a
        href={resume}
        download="Dusty_Mumphrey_Resume.pdf"
        className="call-to-action"
      >
        Download Resume
      </a>
    </section>
  );
}

export default About;

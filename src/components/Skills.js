import React from "react";
import "../styles/Skill.css";

function SkillKey() {
  return (
    <div className="skill-key">
      <h3 className="key-title">Proficiency Levels</h3>
      <div className="key">
        <div className="key-item">
          <span className="dot beginner"></span>Beginner
        </div>
        <div className="key-item">
          <span className="dot intermediate"></span>Intermediate
        </div>
        <div className="key-item">
          <span className="dot advanced"></span>Advanced
        </div>
        <div className="key-item">
          <span className="dot expert"></span>Expert
        </div>
      </div>
    </div>
  );
}

function SkillCategory({ category, skills }) {
  return (
    <div className="skill-category">
      <h3 className="category-title">{category}</h3>
      <ul className="skills-list">
        {skills.map((skill, index) => (
          <li
            key={index}
            className={`skill-item ${skill.proficiency}`}
            data-tooltip={skill.name}
          >
            {skill.name}
          </li>
        ))}
      </ul>
    </div>
  );
}

function Skills() {
const skillData = [
  {
    category: "Languages",
    skills: [
      { name: "Python", proficiency: "expert" },
      { name: "JavaScript", proficiency: "expert" },
      { name: "TypeScript", proficiency: "advanced" },
      { name: "C#", proficiency: "intermediate" },
    ],
  },
  {
    category: "Frontend",
    skills: [
      { name: "React/ReactJS", proficiency: "expert" },
      { name: "Redux", proficiency: "advanced" },
      { name: "Next.js", proficiency: "advanced" },
      { name: "jQuery", proficiency: "intermediate" },
    ],
  },
  {
    category: "Backend",
    skills: [
      { name: "Node/NodeJS", proficiency: "expert" },
      { name: "Flask", proficiency: "advanced" },
      { name: "Django", proficiency: "advanced" },
      { name: ".NET Core", proficiency: "intermediate" },
    ],
  },
  {
    category: "Mobile Development",
    skills: [
      { name: "Xamarin", proficiency: "beginner" },
      { name: "React Native", proficiency: "intermediate" },
    ],
  },
  {
    category: "Databases",
    skills: [
      { name: "MySQL", proficiency: "expert" },
      { name: "PostgreSQL", proficiency: "expert" },
      { name: "SQL Server", proficiency: "advanced" },
      { name: "NoSQL", proficiency: "intermediate" },
      { name: "ElasticSearch", proficiency: "beginner" },
    ],
  },
  {
    category: "Testing & QA",
    skills: [
      { name: "TDD (Test-Driven Development)", proficiency: "expert" },
      { name: "Jasmine", proficiency: "intermediate" },
      { name: "Jest", proficiency: "advanced" },
      { name: "PyTest", proficiency: "advanced" },
      { name: "Unit Testing", proficiency: "expert" },
      { name: "Regression Testing", proficiency: "advanced" },
      { name: "Integration Testing", proficiency: "advanced" },
      { name: "E2E Testing", proficiency: "advanced" },
    ],
  },
  {
    category: "DevOps & CI/CD",
    skills: [
      { name: "Docker", proficiency: "advanced" },
      { name: "Kubernetes", proficiency: "intermediate" },
      { name: "CI/CD", proficiency: "advanced" },
      { name: "AWS (various services)", proficiency: "intermediate" },
      { name: "Azure", proficiency: "beginner" },
    ],
  },
  {
    category: "Version Control & Collaboration",
    skills: [
      { name: "Git", proficiency: "expert" },
      { name: "Agile methodologies", proficiency: "expert" },
    ],
  },
  {
    category: "APIs & Architectures",
    skills: [
      { name: "RESTful APIs", proficiency: "expert" },
      { name: "GraphQL", proficiency: "beginner" },
      { name: "SOAP", proficiency: "beginner" },
      { name: "microservices architecture", proficiency: "advanced" },
      { name: "SaaS", proficiency: "expert" },
    ],
  },
  {
    category: "Programming Principles & Patterns",
    skills: [
      { name: "OOP (Object-Oriented Programming)", proficiency: "expert" },
      { name: "Design patterns", proficiency: "advanced" },
      { name: "SOLID principles", proficiency: "advanced" },
    ],
  },
  {
    category: "Security & Authorization",
    skills: [
      { name: "JWT (JSON Web Tokens)", proficiency: "advanced" },
      { name: "OAuth", proficiency: "intermediate" },
    ],
  },
  {
    category: "Miscellaneous",
    skills: [
      { name: "ORM (Object-Relational Mapping)", proficiency: "intermediate" },
      { name: "HTTP protocol", proficiency: "advanced" },
      { name: "Query Optimization", proficiency: "intermediate" },
      { name: "Kafka", proficiency: "beginner" },]
  }]


  return (
    <section id="skills" className="skills-section section-container">
      <h2>Skills</h2>
      <SkillKey />
      <div className="skills-container">
        {skillData.map((data, index) => (
          <SkillCategory
            key={index}
            category={data.category}
            skills={data.skills}
          />
        ))}
      </div>
    </section>
  );
}

export default Skills;

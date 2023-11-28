import React from "react";
import "../styles/Experience.css";

function Experience() {
  return (
    <section id="experience" className="experience-section">
      <h2>Experience</h2>
      <div className="experience-list">
        <div className="experience-item">
          <h3>Software Engineer at Clockwork</h3>
          <p className="experience-duration">November 2022 - Present</p>
          <ul>
            <li>
              Created a scalable internal reporting system using C#, .NET,
              Entity Framework, Xamarin, MySQL Database, and Azure, resulting in
              improved real-time decision-making.
            </li>
            <li>
              Developed an Android mobile ordering tool using Xamarin, .NET,
              MySQL, and Azure, which led to a 60% increase in active users and
              a 40% surge in daily orders.
            </li>
            <li>
              Implemented RESTful APIs to enable seamless integration and
              third-party service interaction, significantly enhancing the
              application's functionality.
            </li>
          </ul>
        </div>
      </div>
      <div className="experience-list">
        <div className="experience-item">
          <h3>Software Engineer at Vault Health</h3>
          <p className="experience-duration">January 2021 - October 2022</p>
          <ul>
            <li>
              Redesigned the daily monitoring report using New Relic and
              Cloudwatch, resulting in an error rate of less than 1% and
              significantly improved visibility.
            </li>
            <li>
              Led the development of a COVID test tracking system using Python,
              Flask, Next.JS, GraphQL, and TypeScript, leading to a 90%
              reduction in inquiries.
            </li>
            <li>
              Collaborated on the design of a scalable microservices
              architecture, which improved performance and reduced
              time-to-market.
            </li>
            <li>
              Successfully delivered an innovative clinical trial platform using
              Python, FastAPI, Next.JS, GraphQL, and TypeScript, leading to a
              30% increase in participant diversity.
            </li>
          </ul>
        </div>
      </div>
      <div className="experience-list">
        <div className="experience-item">
          <h3>Founder at Dust In Time Designs</h3>
          <p className="experience-duration">January 2017 - January 2022</p>
          <ul>
            <li>
              Collaborated with a diverse range of clients, leveraging
              technologies such as C#, Python, JavaScript, Flutter, React,
              Xamarin, and Azure.
            </li>
            <li>
              Developed applications with a steadfast commitment to delivering
              exceptional customer satisfaction and an outstanding user
              experience.
            </li>
            <li>
              Proficiently utilized relational databases, including PostgreSQL,
              while also designing APIs with TypeScript. Contributed to projects
              involving AWS and GraphQL.
            </li>
          </ul>
        </div>
      </div>
      <div className="experience-list">
        <div className="experience-item">
          <h3>Restaurant Manager at Panda Express</h3>
          <p className="experience-duration">August 2014 - June 2018</p>
          <ul>
            <li>
              Fostered and nurtured strong relationships with business partners,
              proactively identifying new opportunities to drive significant
              growth.
            </li>
            <li>
              Conducted comprehensive analysis of customer feedback and usage
              data, identifying strategic areas for enhancement and implementing
              strategies to significantly boost customer loyalty.
            </li>
            <li>
              Successfully built and led a high-performance team that
              consistently achieved all key performance indicators.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Experience;

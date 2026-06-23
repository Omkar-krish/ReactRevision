import React from "react";
import "./About.css";

function About() {
  return (
    <section className="about">
      <div className="about-container">

        <div className="about-content">
          <h1>About Me</h1>

          <h2>Hi, I'm Omkar 👋</h2>

          <p>
            I am a passionate Java and React Developer who enjoys
            building modern, responsive, and user-friendly web applications.
          </p>

          <p>
            I have experience with HTML, CSS, JavaScript, React,
            React Router, and Java. I love learning new technologies
            and improving my development skills.
          </p>

          <div className="skills">
            <span>Java</span>
            <span>React</span>
            <span>JavaScript</span>
            <span>HTML</span>
            <span>CSS</span>
          </div>

         <button>
            <a
                href="/resume.pdf"
                download="Omkar_Kanade_Resume.pdf"
                style={{textDecoration: "none", color: "inherit" }}
            >
                Download Resume
            </a>
          </button>
        </div>

      </div>
    </section>
  );
}

export default About;
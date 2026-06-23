import React from "react";
import "./Home.css";
import {useNavigate} from "react-router-dom"
function Home() {
      const navigate = useNavigate();

  const goToProjects = () => {
    navigate("/Project");
  };
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>Hello, I'm Omkar</h1>

        <h2>Java Developer | React Developer</h2>

        <p>
          I build responsive and modern web applications
          using React, JavaScript, HTML, CSS, and Java.
        </p>

        <button className="btn" onClick={ goToProjects}>
          View Projects
        </button>
      </div>
    </section>
  );
}

export default Home;
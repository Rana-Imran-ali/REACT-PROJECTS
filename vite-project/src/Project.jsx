import React from "react";

function Projects() {
  return (
    <section id="projects" className="projects">
      <h2>My Projects</h2>
      <div className="project-list">
        <div className="project-card">
          <h3>🌐 Portfolio Website</h3>
          <p>My personal website built with React and Tailwind CSS.</p>
        </div>
        <div className="project-card">
          <h3>🛒 E-Commerce Store</h3>
          <p>A demo online store made with React and Firebase.</p>
        </div>
        <div className="project-card">
          <h3>📝 Todo App</h3>
          <p>Simple task manager using JavaScript and localStorage.</p>
        </div>
      </div>
    </section>
  );
}

export default Projects;

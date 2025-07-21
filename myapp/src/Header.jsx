import React from 'react'

const Projects = () => {
  let styles = {
    fontSize: "1.7rem",
    cursor: "pointer",
    color: "blue",
    fontWeight: "600",
    textDecoration: "none"
  }
  return (
    <div className="page projects">
      <h2>Projects</h2>
      <div className="project-card">
        <a href='https://rahulpareek011.github.io/MY-PORTFOLIO/' target='blank' style={styles}>Personal Portfolio</a>
        <p>A fully responsive Portfolio designed & coded from scratch.</p>
      </div>
      <div className="project-card">
        <a href='https://rahulpareek011.github.io/food-mart-clone-tailwind/' target='blank' style={styles}>Food Mart</a>
        <p>A Online Food mart site where every food is waiting for you.</p>
      </div>
      <div  className="project-card">
        <a href='https://github.com/rahulpareek011/ClassRoom-clone-tailwind.git' style={styles}>Classroom Clone</a>
        <p>A classroom collaboration tool inspired by Google Classroom.</p>
      </div>
      <div className="project-card">
        <a href='https://rahulpareek011.github.io/Meesho-Clone/' style={styles}>Meesho Clone</a>
        <p>An online marketplace UI built with modern design techniques.</p>
      </div>
    </div>
  );
};

export default Projects;

import React from "react";
import "./Projects.css";

const projects = [
  {
    name: "Virtual Whiteboard",
    description:
      "a virtual whiteboard is an interactive digital platform that simulates a physical whiteboard, allowing users to draw, write, take notes anytime.",
    githubLink: "https://github.com/shivani-202/VirtualWhiteboard",
    liveLink: "https://virtual-whiteboard.vercel.app/",
  },
  {
    name: "Food Frenzy",
    description:
      "a food delivery website designed to provide users with a seamless and delightful food ordering experience. Built using React.js and Vite, the frontend of Food Frenzy is optimized for performance, responsiveness, and user-friendly interactions.",
    githubLink: "https://github.com/shivani-202/food-frenzy-frontend",
    liveLink: "https://food-frenzy-frontend-yfyq.vercel.app/",
  },
  {
    name: "Palette",
    description:
      "a dynamic web application built with React.js to manage tasks efficiently. it features a clean interface and real-time updates.",
    githubLink: "https://github.com/shivani-202/CODXO",
    liveLink: "https://food-frenzy-frontend-yfyq.vercel.app/",
  },
];

const Projects = () => {
  return (
    <div className="projects-container">
      {projects.map((project, index) => {
        return (
          <div className="project-card" key={index}>
            <div className="project-content">
              <h3 className="name">{project.name}</h3>
              <p className="description">{project.description}</p>
            </div>
            <div className="project-links">
              <a
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub Repo
              </a>
              <a
                href={project.liveLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                Deployed Site
              </a>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Projects;

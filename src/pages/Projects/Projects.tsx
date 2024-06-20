import React from "react";
import "./Projects.css";

const Projects: React.FC<{ turned: boolean; active: boolean }> = ({
  turned,
  active,
}) => {
  return (
    <div
      className={`page projects ${turned ? "turned" : ""} ${
        active ? "active" : ""
      }`}
    >
      <div className="content">
        <div className="projects">
          <h1>My Projects</h1>
        </div>
      </div>
    </div>
  );
};

export default Projects;

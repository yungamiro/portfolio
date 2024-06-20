import React from "react";
import "./About.css";

const About: React.FC<{ turned: boolean; active: boolean }> = ({
  turned,
  active,
}) => {
  return (
    <div
      className={`page about ${turned ? "turned" : ""} ${
        active ? "active" : ""
      }`}
    >
      <div className="content">
        <div className="stacks">
          <h1>Stacks</h1>
        </div>
        <div className="stacks-body"></div>
      </div>
    </div>
  );
};

export default About;

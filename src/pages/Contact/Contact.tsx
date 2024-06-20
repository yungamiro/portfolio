import React from "react";
import "./Contact.css";

const Contact: React.FC<{ turned: boolean; active: boolean }> = ({
  turned,
  active,
}) => {
  return (
    <div
      className={`page contact ${turned ? "turned" : ""} ${
        active ? "active" : ""
      }`}
    >
      <div className="content">
        <div className="contact">
          <h1>Contact Me</h1>
        </div>
      </div>
    </div>
  );
};

export default Contact;

import React from "react";
import "./skills.css";
import Frontend from "./Frontend";
import Backend from "./Backend";

const Skills = (dark) => {
  return (
    <section
      className={`skills section ${
        dark.mode === true ? "skills__dark-mode-section" : ""
      }`}
      id="skills"
    >
      <h2 className="section__title">Skills</h2>
      <span className="section__subtitle">My technical level</span>

      <div className="skills__container container grid">
        <Frontend />
        <Backend />
      </div>
    </section>
  );
};

export default Skills;

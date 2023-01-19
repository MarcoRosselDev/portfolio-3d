import React, { useState } from "react";
import "./portfolio.css";
import data from "./data";

const Portfolio = (dark) => {
  const [projects, setProjects] = useState(data);
  const [index, setIndex] = useState(0);
  return (
    <div className={`${dark.mode === true ? "portfolio__dark-mode" : ""}`}>
      <div id="portfolio" className="portfolio__container section container ">
        <h2 className="section__title">Portfolio</h2>
        <span className="section__subtitle">Last Projects</span>
        <div className="portfolio__container  grid">
          {projects.map((projects, projectsIndex) => {
            const { id, image, title, descriptions, link, libraries } =
              projects;

            return (
              <div className="portfolio__container portfolio__content" key={id}>
                <h2>{title}</h2>
                <p>{descriptions}</p>
                <a href={link} target="_blank">
                  <button className="button">see project</button>
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;

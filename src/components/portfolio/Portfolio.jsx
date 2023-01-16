import React from "react";
import "./portfolio.css";
import ProjectOne from "./ProjectOne";
import ProjectTwo from "./ProjectTwo";

const Portfolio = (dark) => {
  return (
    <div className={`${dark.mode === true ? "portfolio__dark-mode" : ""}`}>
      <div id="portfolio" className="portfolio__container section container ">
        <h2 className="section__title">Portfolio</h2>
        <span className="section__subtitle">Last Projects</span>
        <div className="portfolio__container  grid">
          <div className="portfolio__container portfolio__content">
            <h1>hola</h1>
          </div>
          <div className="portfolio__container portfolio__content">
            <h1>hola</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;

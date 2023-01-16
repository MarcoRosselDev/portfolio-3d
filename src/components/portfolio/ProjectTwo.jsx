import React from "react";
// import AboutImg from "../../assets/cloud-plus-firebase_1x.png";
import Arrow from "./Arrow";

const ProjectTwo = () => {
  return (
    <div className="portfolio__container portfolio__content">
      <h3 className="portfolio__title ">Firebase Login</h3>

      <div className="portfolio__box">
        <div className="skills__group">
          <div className="portfolio__data">
            <span className="portfolio__level">
              <div className="div-skills">
                <Arrow />
                <p className="p-arrow">taildwin on styles</p>
              </div>
              <div className="div-skills">
                <Arrow />
                <p className="p-arrow">firebase on autentication</p>
              </div>
              <div className="div-skills">
                <Arrow />
                <p className="p-arrow">React on JS Library</p>
              </div>
            </span>
          </div>
          <img src="" alt="" className="about__img" />
        </div>
      </div>
      <div>
        <div className="a-link">
          <a
            href="https://login-firebase-370419.nn.r.appspot.com/login"
            className="home__social-icon"
            target="_blank"
            rel="noopener noreferrer"
          >
            See the Project
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectTwo;

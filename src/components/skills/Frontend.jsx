import React from "react";
import Check from "./Check";

const Frontend = () => {
  return (
    <div className="">
      <div className="skills__container skills__content">
        <h3 className="skills__title ">Frontend developer</h3>

        <div className="skills__box">
          <div className="skills__group">
            <div className="skills__data">
              <Check />

              <div>
                <h3 className="skills__name">HTML</h3>
                <span className="skills__level">Basic</span>
              </div>
            </div>

            <div className="skills__data">
              <Check />

              <div>
                <h3 className="skills__name">CSS</h3>
                <span className="skills__level">Intermediate</span>
              </div>
            </div>

            <div className="skills__data">
              <Check />

              <div>
                <h3 className="skills__name">JavaScript</h3>
                <span className="skills__level">Intermediate</span>
              </div>
            </div>
          </div>

          <div className="skills__group">
            <div className="skills__data">
              <Check />

              <div>
                <h3 className="skills__name">Bootstrap</h3>
                <span className="skills__level">Intermediate</span>
              </div>
            </div>

            <div className="skills__data">
              <Check />

              <div>
                <h3 className="skills__name">tailwind</h3>
                <span className="skills__level">Basic</span>
              </div>
            </div>

            <div className="skills__data">
              <Check />

              <div>
                <h3 className="skills__name">React</h3>
                <span className="skills__level">Intermediate</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Frontend;

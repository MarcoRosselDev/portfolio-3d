import React from "react";
import Check from "./Check";

const Backend = () => {
  return (
    <div className="skills__content">
      <h3 className="skills__title">Backend developer</h3>

      <div className="skills__box">
        <div className="skills__group">
          <div className="skills__data">
            <Check />

            <div>
              <h3 className="skills__name">Node Js</h3>
              <span className="skills__level">Basic</span>
            </div>
          </div>

          <div className="skills__data">
            <Check />

            <div>
              <h3 className="skills__name">Firebase</h3>
              <span className="skills__level">Basic</span>
            </div>
          </div>

          <div className="skills__data">
            <Check />

            <div>
              <h3 className="skills__name">MongoDB</h3>
              <span className="skills__level">Basic</span>
            </div>
          </div>
        </div>

        <div className="skills__group">
          <div className="skills__data">
            <Check />

            <div>
              <h3 className="skills__name">MySQL</h3>
              <span className="skills__level">Basic</span>
            </div>
          </div>
          {/*
          <div className="skills__data">
            <Check />
            <div>
              <h3 className="skills__name"></h3>
              <span className="skills__level"></span>
            </div>
          </div>
          <div className="skills__data">
            <Check />
            <div>
              <h3 className="skills__name"></h3>
              <span className="skills__level"></span>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Backend;

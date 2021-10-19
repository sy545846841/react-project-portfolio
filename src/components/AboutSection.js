import React from "react";
import home1 from "../img/home1.png";

const AboutSection = () => {
  return (
    <div>
      <div className="descption">
        <div className="title">
          <div className="hide">
            <h2>We work to make</h2>
          </div>
          <div className="hide">
            <h2>
              Your <span>Ddreams</span> come
            </h2>
          </div>
          <div className="hide">
            <h2>true.</h2>
          </div>
        </div>
        <p>Contact us for any photography or videography ideas</p>
        <button>Contact Us</button>
      </div>
      <div className="image">
        <img src={home1} alt="guy with a camera" />
      </div>
    </div>
  );
};

export default AboutSection;

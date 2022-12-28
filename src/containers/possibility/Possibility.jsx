import React from "react";
import possibility from "../../assets/possibility.png";
import "./possibility.css";

const Possibility = () => {
  return (
    <div className="gpt3__possibility-container section__margin">
      <div className="gpt3__possibility-image__wrapper">
        <img src={possibility} alt="Possibility" />
      </div>
      <div className="gpt3__possibility-content">
        <p>Request Early Access to Get Started</p>
        <h1 className="gradient__text">
          The possibilities are beyond your imagination
        </h1>
        <p>
          Yet bed any for travelling assistance indulgence unpleasing. Not
          thoughts all exercise blessing. Indulgence way everything joy
          alteration boisterous the attachment. Party we years to order allow
          asked of.
        </p>
        <span>Request Early Access to Get Started</span>
      </div>
    </div>
  );
};

export default Possibility;

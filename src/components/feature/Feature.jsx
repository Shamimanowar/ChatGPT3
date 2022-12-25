import React from "react";
import "./feature.css";

const Feature = ({title, subTitle}) => {
  return <div className="gpt3__feature">
    <div className="gpt3__feature-heading__bar"></div>
    <h1 className="">{title}</h1>
    <p>{subTitle} </p>
  </div>;
};

export default Feature;

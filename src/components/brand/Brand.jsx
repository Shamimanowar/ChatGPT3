import React from "react";
import "./brand.css";
import { google, atlassian, dropbox, slack, shopify } from "./Imports";

const Brand = () => {
  return (
    <div className="gpt3__brand section__margin">
      <div>
        <img src={google} alt="" />
      </div>
      <div>
        <img src={slack} alt="" />
      </div>
      <div>
        <img src={atlassian} alt="atlassian" />
      </div>
      <div>
        <img src={dropbox} alt="dropbox" />
      </div>
      <div>
        <img src={shopify} alt="shopify" />
      </div>
    </div>
  );
};

export default Brand;

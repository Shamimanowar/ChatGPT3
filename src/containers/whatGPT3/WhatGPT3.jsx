import React from "react";
import "./whatGPT3.css";
import { Feature } from "../../components";

const WhatGPT3 = () => {
  return (
    <div className="gpt3__whatgpt3 section__margin" id="whatGPT3">
      <div className="gpt3__whatgpt3-feature">
        <Feature title={"What is GPT-3"} />
        <div>We so opinion friends me message as delight. Whole front do of plate heard oh ought. His defective nor convinced residence own. Connection has put impossible own apartments boisterous. At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by.</div>
      </div>
      <div className="gpt3__whatgpt3-heading">
        <h1 className="gradient__text">
          The possibilities are beyond your imagination
        </h1>
        <p>Explore The Library</p>
      </div>
      <div className="gpt3__whatgpt3-container">
        <Feature title={"Chatbots"} subTitle={"We so opinion friends me message as delight. Whole front do of plate heard oh ought."}/>
        <Feature title={"Knowledgebase"} subTitle={"At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments b"}/>
        <Feature title={"Education"} subTitle={"At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments b"}/>
      </div>
    </div>
  );
};

export default WhatGPT3;

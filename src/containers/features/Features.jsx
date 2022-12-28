import React from "react";
import "./features.css";
import { Feature } from "../../components";

const Features = () => {
  return (
    <div className="gpt3__features-container section__margin">
      <div className="gpt3__features-heading">
        <h1 className="gradient__text">
          The Future is Now and You Just Need To Realize It. Step into Future
          Today & Make it Happen.
        </h1>
        <span>Request Early Access to Get Started</span>
      </div>
      <div className="gpt3__features-content">
        <div className="gpt3__features-content__element">
          <Feature title="Improving end distrusts instantly " subTitle={""} />
          <div>
            From they fine john he give of rich he. They age and draw mrs like.
            Improving end distrusts may instantly was household applauded.
          </div>
        </div>
        {/*  */}
        <div className="gpt3__features-content__element">
          <Feature title="Become the tended active" subTitle={""} />
          <div>
            Considered sympathize ten uncommonly occasional assistance
            sufficient not. Letter of on become he tended active enable to.
          </div>
        </div>
        <div className="gpt3__features-content__element">
          <Feature title="Message or am nothing" subTitle={""} />
          <div>
            Led ask possible mistress relation elegance eat likewise debating.
            By message or am nothing amongst chiefly address.
          </div>
        </div>
        <div className="gpt3__features-content__element">
          <Feature title="Really boy law county" subTitle={""} />
          <div>
            Really boy law county she unable her sister. Feet you off its like
            like six. Among sex are leave law built now. In built table in an
            rapid blush.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;

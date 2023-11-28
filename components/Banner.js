import React from "react";
import { Title, TitleLogo } from "./common/Title";

const Banner = () => {
  return (
    <>
      <section className="banner">
        <div className="container">
          <div>
            <Title title="We are looking forward to start something new with you " />
            <br />
            <TitleLogo title="Lets take your business, career and skills to the next level!" />
            <h3>
              <b>We are just a call away:</b> +234-803-787-0270
            </h3>
          </div>
        </div>
      </section>
    </>
  );
};

export default Banner;

import { home } from "@/assets/data/dummydata";
import Banner from "@/components/Banner";
import Expertise from "@/components/Expertise";
import Testimonial from "@/components/Testimonial";
import { Title, TitleLogo, TitleSm } from "@/components/common/Title";
import { Brand } from "@/components/router";
import React from "react";

const Hero = () => {
  return (
    <>
      <section className="hero">
        <div className="container">
          {/* <TitleLogo title="creative" caption="7" className="logobg" /> */}
          <h3 className="hero-title">
            We Specialize in Training and Human Skills Development.
          </h3>

          <div className="sub-heading">
            <TitleSm title="Training & Development" /> <span>.</span>
            <TitleSm title="Consulting" /> <span>.</span>
            <TitleSm title="Research & Assessment" />
          </div>
        </div>
      </section>
      <section className="hero-sec">
        <div className="container">
          <div className="heading-title">
            <Title title="The last Training & Consultancy company you will ever need" />
            <p>
              We specialize in Training and Human Skills Development, for both
              management and technical skills. In addition to extensive
              industrial experience in human resources management. We have a
              pool of experts in our faculty that are specialized in specific
              areas of specialization that serve the organization.
            </p>
          </div>
          <div className="hero-content grid-4">
            {home.map((item, i) => (
              <div className="box" key={i}>
                <span className="green">{item.icon}</span> <br />
                <br />
                <h3>{item.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Expertise />
      <Banner />
      <Testimonial />
      <Brand />
    </>
  );
};

export default Hero;

import { expertise } from "@/assets/data/dummydata";
import { Card } from "@/components/common/Card";
import { Title, TitleSm } from "@/components/common/Title";
import React from "react";

const Services = () => {
  return (
    <>
      <section className="agency bg-top">
        <div className="container">
          <div className="heading-title">
            <TitleSm title="SERVICES" /> <br />
            <br />
            <Title
              title="Curriculum development, Organizing  seminars and Company retreats for;"
              className="title-bg"
            />
            <p>
              -Schools -Cooperate Organizations -Retreats -Unions -School
              Proprietors -School teachers -Hospitality Industry Workers,
              -Health Industry Workers -Training and Coaching for Nannies and
              House helps.
            </p>
          </div>
          <div className="grid-3 py">
            {expertise.map((item) => (
              <Card data={item} key={item.id} caption={item.post} show={true} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;

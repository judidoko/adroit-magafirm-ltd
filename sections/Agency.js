import Banner from "@/components/Banner";
import Brand from "@/components/Brand";
import Testimonial from "@/components/Testimonial";
import { Title, TitleSm } from "@/components/common/Title";

const Agency = () => {
  return (
    <>
      <section className="agency bg-top">
        <div className="container">
          <div className="heading-title">
            <TitleSm title="ABOUT Us" /> <br />
            <br />
            <Title
              title="The Latest Training & Consultancy company you will ever need!"
              className="title-bg"
            />
          </div>

          <div className="content flex1">
            <div className="left w-60 py">
              <TitleSm title="Turning your Dreams and ideas into Reality" />
              <p className="desc-p">
                We work together in partnership with different companies in
                achieving hands-on solutions to help solve day-to-day business
                challenges. We believe in a comprehensive approach – becoming
                part of our client’s business and providing solutions to
                challenges confronting organizational growth. We want to support
                you by meeting your needs and achieving your goals in improving
                bottom line results and to sustain the competition advantage.
              </p>
              <div className="grid-3">
                <div className="box">
                  <h1 className="indigo">3+</h1>
                  <h3>Years of experience</h3>
                </div>
                <div className="box">
                  <h1 className="indigo">50+</h1>
                  <h3>Successful cases</h3>
                </div>
                <div className="box">
                  <h1 className="indigo">1+</h1>
                  <h3>Industry awards</h3>
                </div>
              </div>
            </div>
            <div className="right w-40 ml">
              <img
                src="/images/about.jpg"
                alt="Img"
                className="round"
                width="100%"
                height="100%"
              />
            </div>
          </div>

          <div className="content flex">
            <div className="left w-40 py">
              <img
                src="/images/cons.jpg"
                alt="Img"
                className="round"
                width="100%"
                height="100%"
              />
            </div>
            <div className="right w-60 ml">
              <TitleSm title="Our mission and Commitment" />
              <br />
              <p className="misson-p">
                Our mission is to reach out vastly and deliver high impact
                development programs through consultancy services, training and
                educating
              </p>
              <br />
              <br />
              <p className="misson-p">
                We offer training and learning lab that are aimed at providing
                solutions to help increase productivity, performance and
                profitability of ------- <br />
                We believe in customizing and developing specific solutions
                through a corroborative process designed to identify a client’s
                needs, requirements and objectives.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Brand />
      <Testimonial />
      <Banner />
      <br />
      <br />
      <br />
      <br />
    </>
  );
};

export default Agency;

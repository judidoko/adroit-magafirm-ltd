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
          <p className="desc-p">
            Adroit Mega Firm Ltd is a Training & Consultancy company founded
            since 2021. We specialize in Training, Counseling, Health & Care
            services and Human Skills Development, for both management and
            technical skills. In addition to extensive industrial experience in
            human resources management. We have a pool of experts in our faculty
            that are specialized in specific areas of specialization that serve
            the organization. We work together in partnership with different
            companies in achieving hands-on solutions to help solve day-to-day
            business challenges. <br /> <br />
            We believe in a comprehensive approach – becoming part of our
            client’s business and providing solutions to challenges confronting
            individual/organizational growth. We want to support you by meeting
            your needs and achieving your goals in improving bottom line results
            and to sustain the competition advantage.
          </p>

          <div className="content flex1">
            <div className="left w-60 py">
              <TitleSm title="Our Mission" />
              <p className="desc-p">
                To identify and clearly articulate the purpose of existence by
                unlocking insight, build capabilities and to enable
                individuals/organizations achieve sustainable future.
              </p>
              <TitleSm title=" Our Vision" />
              <p>
                To provide feedback and actionable strategies to our clients in
                order to improve their efficiency/effectiveness in all areas.
              </p>
              <div className="grid-3">
                <div className="box">
                  <h1 className="indigo">3+</h1>
                  <h4>Years of experience</h4>
                </div>
                <div className="box">
                  <h1 className="indigo">50+</h1>
                  <h4>Successful cases</h4>
                </div>
                <div className="box">
                  <h1 className="indigo">1+</h1>
                  <h4>Industry awards</h4>
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
                src="/images/ourcomm.jpg"
                alt="Img"
                className="round"
                width="100%"
                height="100%"
              />
            </div>
            <div className="right w-60 ml">
              <TitleSm title="Our Commitment" />
              <br />
              <p className="misson-p">
                We are committed to offering long lasting solutions to
                individuals/client, organizations,schools, places of worship,
                hospitals, correctional facilities, hotels etc through
                corroborative process designed to identify a client's need. We
                offer Training and Learning atmosphere, Counseling and
                Care/Health Centres that aim at guiding and developing our
                clients with solutions to help increase productivity,
                performance and profitability.
                <br />
                We also organize campaigns (Awareness/Political) therefore
                sensitizing the public on the toxicity confronting the society,
                thence identifying security threats and providing safety
                measures lectures on how to avert such anomaly. Our business
                focus on these areas; <br />* Training <br /> * Counseling{" "}
                <br /> * Health Education/Care <br /> * Campaigns
                (Awareness/Political) <br /> * Academic Sections <br />*
                Security <br />* Janitorial Services
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

import { Title, TitleSm } from "@/components/common/Title";
import React from "react";
import { AiFillInstagram, AiFillLinkedin } from "react-icons/ai";
import { BsFacebook } from "react-icons/bs";
import { FiHeadphones, FiHelpCircle } from "react-icons/fi";
import { IoLocationOutline } from "react-icons/io5";

const Contact = () => {
  return (
    <>
      <section className="contact bg-top">
        <div className="container">
          <div className="heading-title">
            <TitleSm title="CONTACT Us" /> <br />
            <br />
            <Title title="Let's start right now!" className="title-bg" />
          </div>
          <div className="content py flex1">
            <div className="left w-30">
              <div className="contact-details">
                <div className="box">
                  <FiHeadphones size={30} className="icons" />
                  <h3>+234-803-234-5678</h3>
                  <span>Call us: Mon - Fri 9:00 AM - 5:00 PM</span>
                </div>
                <div className="box">
                  <IoLocationOutline size={30} className="icons" />
                  <h3>Nigeria</h3>
                  <span>
                    Address: Suite 009, Better Living Complex, 10 Algiers
                    Street, Wuse, Zone 5, Abuja
                  </span>
                </div>
                <div className="box">
                  <FiHelpCircle size={30} className="icons" />
                  <h3>info@aml.com</h3>
                  <span>Drop us a line anytime!</span>
                </div>
              </div>
              <ul>
                <li className="icon">
                  <BsFacebook size={25} />
                </li>
                <li className="icon">
                  <AiFillInstagram size={25} />
                </li>
                <li className="icon">
                  <AiFillLinkedin size={25} />
                </li>
              </ul>
            </div>
            <div className="right w-70">
              <TitleSm title="Make an online enquiry" />
              <p className="desc-p">
                Got questions? Ideas? Fill out the form below to get in touch.
              </p>

              <form>
                <div className="grid-2">
                  <div className="inputs">
                    <span>Name</span>
                    <input type="text" />
                  </div>
                  <div className="inputs">
                    <span>Email</span>
                    <input type="text" />
                  </div>
                </div>
                <div className="inputs">
                  <span>TELL US A BIT ABOUT WHAT YOU WANT*</span>
                  <textarea cols="30" rows="10"></textarea>
                </div>
                <button className="button-primary">Submit</button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;

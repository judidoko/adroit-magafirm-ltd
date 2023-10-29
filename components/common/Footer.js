import { useEffect, useState } from "react";
import Link from "next/link";
import { BsFacebook } from "react-icons/bs";
import { AiFillInstagram, AiFillLinkedin } from "react-icons/ai";
import { useRouter } from "next/router";

const Footer = () => {
  const [activeLink, setActiveLink] = useState("");

  const router = useRouter();
  useEffect(() => {
    setActiveLink(router.pathname);
  }, [router.pathname]);
  return (
    <>
      <footer>
        <div className="container">
          <div className="grid-4">
            <div className="logo">
              <img
                src="./images/adroit.png"
                alt="Logo"
                style={{ height: "80px", width: "150px" }}
              />
              <br />
              <span>
                Questions? Reach us <br /> Monday – Friday from 9 am to 6 pm
              </span>
              <br />
              <br />
              <span>
                Address: Suite 009, Better Living Complex, 10 Algiers Street,
                <br />
                Wuse, Zone 5, Abuja
              </span>
              <br />
              <br />
              <h3>+234 804 234 5678</h3>
              <br />
            </div>
            <ul>
              <h3>COMPANY</h3>
              <li>
                <Link href="/agency">About Us</Link>
              </li>
              <li>
                <Link href="/team">Our team</Link>
              </li>

              <li>
                <Link href="/services">Services</Link>
              </li>
              <li>
                <Link href="/contact">Contact Us</Link>
              </li>
            </ul>
            <ul>
              <h3>SERVICES</h3>
              <li>
                <Link href="/contact">Training & Development</Link>
              </li>
              <li>
                <Link href="/">Productivity</Link>
              </li>
              <li>
                <Link href="/">Consulting</Link>
              </li>
              <li>
                <Link href="/">Research & Assessment</Link>
              </li>
            </ul>
            <ul>
              <h3>CONNECT</h3>
              <div className="connect">
                <li>
                  <Link href="/">
                    <BsFacebook size={25} />
                  </Link>
                </li>

                <li>
                  <Link href="/">
                    <AiFillInstagram size={25} />
                  </Link>
                </li>
                <li>
                  <Link href="/">
                    <AiFillLinkedin size={25} />
                  </Link>
                </li>
              </div>
            </ul>
          </div>
          <div className="legal connect py">
            <div className="text">
              <span>© 2023 ADROIT MEGAFIRM LTD. ALL RIGHTS RESERVED.</span>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;

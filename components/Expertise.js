import { useEffect, useState } from "react";
import { Title } from "./common/Title";
import { expertise } from "@/assets/data/dummydata";
import { Card } from "./common/Card";
import Link from "next/link";
import { useRouter } from "next/router";

const Expertise = () => {
  const [activeLink, setActiveLink] = useState("");

  const four = expertise.slice(0, 4);

  const router = useRouter();
  useEffect(() => {
    setActiveLink(router.pathname);
  }, [router.pathname]);
  return (
    <>
      <section className="expertise">
        <div className="container">
          <div className="heading-title">
            <Title title="Our expertise" />
            <p>Our business focus on these areas;</p>
          </div>
          <div className="hero-content grid-4">
            {four.map((item, id) => (
              <Card data={item} key={id} caption={item.post} show={true} />
            ))}
          </div>
          <Link
            href="/services"
            className={activeLink == "/services" ? "activeLink" : "none"}
          >
            <button className="button-primary">And more </button>
          </Link>
        </div>
      </section>
    </>
  );
};

export default Expertise;

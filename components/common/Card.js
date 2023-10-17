import Link from "next/link";
import { TitleSm } from "./Title";
import { HiOutlineArrowRight } from "react-icons/hi";

export const Card = ({ data, caption, show, path }) => {
  return (
    <>
      <div className="card">
        <div className="card-img">
          <img src={data.cover} alt={data.title} />
        </div>
        <div className="card-details">
          <Link href="" className="title-link">
            <TitleSm title={data.title} />
          </Link>
          {caption && (
            <h5 href={`${path}/${data.id}`}>
              {caption}
              {/* <HiOutlineArrowRight className="link-icon" /> */}
            </h5>
          )}
          <div className="flex">
            <span> {data.category} </span>
            {data.date && <span> / {data.date}</span>}
          </div>

          {show && (
            <ul>
              {data.desc.map((text, i) => (
                <li key={i}> - {text.text}</li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </>
  );
};

/* eslint-disable react/prop-types */
import { ContentHeading } from "../../components";
import "./why.css";
import lookingahead from "../../assets/lookingahead.webp";
import nightout from "../../assets/nightout.webp";
import row2 from "../../assets/row2.webp";
import row2right from "../../assets/row2-right.webp";

const WhyCard = ({ props, extraClasses = "" }) => {
  return (
    <>
      {" "}
      <div className={`why-card ${extraClasses}`}>
        <div className="why-card-text-wrapper">
          <h2 className="why-card-heading">{props.heading}</h2>
          <p className="why-card-text">{props.text}</p>
        </div>
        <div className="why-card-image">
          <img src={props.img} />
        </div>
      </div>
    </>
  );
};

const Why = () => {
  const sectionCopy = {
    smallTitle: "Why Sitter?",
    title: "We pop in so you can pop out",
    text: "Making the impossible things about petcare possible.",
  };

  const cards = [
    {
      heading: "Looking Ahead",
      text: "Look at you being so ahead of the game. We can book petcare up to a month out — we look forward to seeing you then.",
      img: lookingahead,
    },
    {
      heading: "A Night Out",
      text: "Nothing should get in the way of the time you spend together, without your pets. Our sitters make date night easy to pull off.",
      img: nightout,
    },
    {
      heading: "In a Pinch",
      text: "Emergency? Sick sitter? No problem, we can help! We can fill requests with as little as two hours' notice.",
    },
  ];

  return (
    <section className="main-section why-section">
      <ContentHeading classes={"why-heading-wrapper"} props={sectionCopy} />
      <div className="why-content-wrapper">
        <div className="why-row1">
          <WhyCard props={cards[0]} />
          <WhyCard props={cards[1]} />
        </div>
        <div className="why-row2">
          <WhyCard props={cards[2]} extraClasses={"why-row2-card"} />
          <div className="why-row2-images">
            <div className="why-row2-image row2-image1">
              <img src={row2} />
            </div>
            <div className="why-row2-image row2-image2">
              <img src={row2right} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Why;

import { ContentHeading } from "../../components";
import "./why.css";

const Why = () => {
  const sectionCopy = {
    smallTitle: "Why Sitter?",
    title: "We pop in so you can pop out",
    text: "Making the impossible things about petcare possible.",
  };
  return (
    <section className="main-section why-section">
      <ContentHeading classes={"why-text-wrapper"} props={sectionCopy} />
      <div className="why-row1">
        <div className="why-card1">
          <div className="why-card-text"></div>
          <div className="why-card-image"></div>
        </div>
        <div className="why-card2">
          <div className="why-card-text"></div>
          <div className="why-card-image"></div>
        </div>
      </div>
      <div className="why-row2">
        <div className="why-row2-text"></div>
        <div className="why-row2-images">
          <div className="why-row2-image1"></div>
          <div className="why-row2-image2"></div>
        </div>
      </div>
    </section>
  );
};

export default Why;

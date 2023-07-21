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
    </section>
  );
};

export default Why;

import { ContentHeading } from "../../components";
import "./testimonials.css";

const Testimonials = () => {
  const sectionCopy = {
    smallTitle: "Testimonials",
    title: "What our village is saying",
    text: "Sitters that step in when things come up.",
  };
  return (
    <section className="main-section">
      <div className="testimonials-wrapper">
        <div className="testimonials-column-left">
          <ContentHeading
            classes={"testimonials-text-wrapper"}
            props={sectionCopy}
          />
        </div>
        <div className="testimonials-column-right"></div>
      </div>
    </section>
  );
};

export default Testimonials;

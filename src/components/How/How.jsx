/* eslint-disable react/no-unescaped-entities */
import "./how.css";

const How = () => {
  return (
    <section className="main-section">
      <div className="how-wrapper">
        <div className="how-column how-left">
          <div className="how-text-wrapper">
            <p className="tiny">how it works</p>
            <h2 className="how-heading">
              We help families find reliable, flexible kidcare
            </h2>
            <p className="main-text">
              We'll match you with sitters based on your family's needs and
              their availability.
            </p>
          </div>
          <div className="how-tabs-wrapper">
            <div className="how-tab">Sign up</div>
            <div className="how-tab">Book a sitter</div>
            <div className="how-tab">Get care & pay</div>
          </div>
        </div>
        <div className="how-column how-right">
          <div className="how-image-wrapper"></div>
        </div>
      </div>
    </section>
  );
};

export default How;

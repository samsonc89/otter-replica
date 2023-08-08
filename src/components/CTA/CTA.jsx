/* eslint-disable react/prop-types */
import "./cta.css";

const Cta = ({ props }) => {
  return (
    <section className="main-section">
      <div className="cta-wrapper">
        <div className="cta-text-wrapper">
          <h2 className="cta-heading">{props.ctaHeading}</h2>
          <button className="btn-signup-inverse">{props.ctaBtn}</button>
        </div>
        <div className="cta-image-wrapper">
          <img src={props.ctaImg} alt="" className="cta-image" />
        </div>
      </div>
    </section>
  );
};

export default Cta;

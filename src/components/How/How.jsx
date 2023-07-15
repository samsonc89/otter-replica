/* eslint-disable react/no-unescaped-entities */
import "./how.css";
import tabOneImg from "../../assets/tab1.jpg";
import TabCard from "./TabCard";

const How = () => {
  const tab1 = {
    img: tabOneImg,
    text: "We like to keep it simple. Tell us your name, contact information, and a little bit about you and your kids. Just like that, you're all set.",
  };

  return (
    <section className="main-section">
      <div className="how-wrapper">
        <div className="how-column how-left">
          <div className="how-text-wrapper">
            <p className="small-heading">how it works</p>
            <h2 className="content-heading">
              We help families find reliable, flexible kidcare
            </h2>
            <p className="main-text">
              We'll match you with sitters based on your family's needs and
              their availability.
            </p>
          </div>
          <div className="how-tabs-wrapper">
            <div className="tab-item">
              <a href="/" className="how-tab">
                Sign up
              </a>
              <TabCard props={tab1} />
            </div>
            <div className="tab-item">
              <a href="/" className="how-tab">
                Book a sitter
              </a>
              <TabCard props={tab1} />
            </div>
            <div className="tab-item">
              <a href="/" className="how-tab">
                Get care & pay
              </a>
              <TabCard props={tab1} />
            </div>
          </div>
        </div>
        <div className="how-column how-right">
          <TabCard props={tab1} />
          <div className="how-tab-content-wrapper">
            <div className="how-image-wrapper"></div>
            <div className="how-text-wrapper"></div>
          </div>
          <div className="how-tab-content-wrapper">
            <div className="how-image-wrapper"></div>
            <div className="how-text-wrapper"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default How;

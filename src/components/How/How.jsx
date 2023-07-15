/* eslint-disable react/no-unescaped-entities */
import "./how.css";
import tabOneImg from "../../assets/tab1.jpg";
import tabTwoImg from "../../assets/tab2.jpg";
import tabThreeImg from "../../assets/tab3.jpg";
import TabCard from "./TabCard";

const How = () => {
  const tab1 = {
    img: tabOneImg,
    text: "We like to keep it simple. Tell us your name, contact information, and a little bit about you and your kids. Just like that, you're all set.",
  };
  const tab2 = {
    img: tabTwoImg,
    text: "Let us know when you need care and we'll match you with a sitter based on your family's needs and their availability.",
  };
  const tab3 = {
    img: tabThreeImg,
    text: "We've got it from here. Your sitter will show up so you can head out. After your booking wraps up you'll receive a payment request through our app.",
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
              <TabCard extraClass="narrow-content" props={tab1} />
            </div>
            <div className="tab-item">
              <a href="/" className="how-tab">
                Book a sitter
              </a>
              <TabCard extraClass="narrow-content" props={tab2} />
            </div>
            <div className="tab-item">
              <a href="/" className="how-tab">
                Get care & pay
              </a>
              <TabCard extraClass="narrow-content" props={tab3} />
            </div>
          </div>
        </div>
        <div className="how-column how-right">
          <TabCard extraClass="active-content" props={tab1} />
          <TabCard props={tab2} />
          <TabCard props={tab3} />
        </div>
      </div>
    </section>
  );
};

export default How;

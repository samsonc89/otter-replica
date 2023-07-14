/* eslint-disable react/no-unescaped-entities */
import "./how.css";
import tab3 from "../../assets/tab3.jpg";

const How = () => {
  const changeActiveTabBtn = () => {};

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
            <a href="/" className="how-tab">
              Sign up
            </a>
            <a href="/" className="how-tab">
              Book a sitter
            </a>
            <a href="/" className="how-tab active-btn">
              Get care & pay
            </a>
          </div>
        </div>
        <div className="how-column how-right">
          <div className="how-tab-content-wrapper active-tab">
            <div className="how--tab-image-wrapper">
              <img src={tab3} className="tab-image" />
            </div>
            <div className="how-tab-text-wrapper">
              <p>
                We like to keep it simple. Tell us your name, contact
                information, and a little bit about you and your kids. Just like
                that, you're all set.
              </p>
            </div>
          </div>
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

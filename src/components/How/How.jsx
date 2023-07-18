/* eslint-disable react/no-unescaped-entities */
import "./how.css";
import tabOneImg from "../../assets/tab1.jpg";
import tabTwoImg from "../../assets/tab2.jpg";
import tabThreeImg from "../../assets/tab3.jpg";
import TabCard from "./TabCard";
import { useState } from "react";

const How = () => {
  const [selected, setSelected] = useState(0);

  const tabData = [
    {
      title: "Sign up",
      img: tabOneImg,
      text: "We like to keep it simple. Tell us your name, contact information, and a little bit about you and your kids. Just like that, you're all set.",
    },
    {
      title: "Book a sitter",
      img: tabTwoImg,
      text: "Let us know when you need care and we'll match you with a sitter based on your family's needs and their availability.",
    },
    {
      title: "Get care & pay",
      img: tabThreeImg,
      text: "We've got it from here. Your sitter will show up so you can head out. After your booking wraps up you'll receive a payment request through our app.",
    },
  ];

  return (
    <section className="main-section">
      <div className="how-wrapper">
        <div className="how-column how-left">
          <div className="how-text-wrapper">
            <p className="small-heading">how it works</p>
            <h2 className="content-heading">
              We help families find reliable, flexible petcare
            </h2>
            <p className="main-text">
              We'll match you with sitters based on your family's needs and
              their availability.
            </p>
          </div>
          <div className="how-tabs-wrapper">
            {tabData.map((tab, i) => {
              return (
                // eslint-disable-next-line react/jsx-key
                <div key={i} className="tab-item">
                  <div className="how-tab">{tab.title}</div>
                  {selected === i ? (
                    <TabCard extraClass={"narrow-content"} props={tab} />
                  ) : (
                    ""
                  )}
                </div>
              );
            })}
          </div>
        </div>
        <div className="how-column how-right">
          {tabData.map((tab, i) => {
            return selected === i ? <TabCard key={i} props={tab} /> : "";
          })}
        </div>
      </div>
    </section>
  );
};

export default How;

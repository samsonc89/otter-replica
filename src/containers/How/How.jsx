/* eslint-disable react/no-unescaped-entities */
import "./how.css";
import tabOneImg from "../../assets/tab1.jpg";
import tabTwoImg from "../../assets/tab2.jpg";
import tabThreeImg from "../../assets/tab3.jpg";
import TabCard from "./TabCard";
import { useState } from "react";
import { ContentHeading } from "../../components";

const How = ({ filter }) => {
  const [selected, setSelected] = useState(0);

  const sectionCopy = {
    smallTitle: "How it works",
    title: "We help families find reliable, flexible petcare",
    text: "We'll match you with sitters based on your family's needs and their availability.",
  };
  const sitterCopy = {
    smallTitle: "How it works",
    title: "Be the extra set of hands every family needs",
    text: "Join us in making parents lives easier. Just follow these steps and you'll be all set to care with Sitter.",
  };

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
          <ContentHeading
            classes={"how-text-wrapper"}
            props={filter === "Sitter" ? sitterCopy : sectionCopy}
          />
          <div className="how-tabs-wrapper">
            {tabData.map((tab, i) => {
              return (
                <div
                  key={i}
                  onClick={() => {
                    setSelected(i);
                  }}
                  className="tab-item"
                >
                  <div
                    className={
                      selected === i ? "how-tab active-tab" : "how-tab"
                    }
                  >
                    {tab.title}
                  </div>
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
            return (
              <TabCard
                key={i}
                extraClass={selected === i ? "active-content" : ""}
                props={tab}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default How;

/* eslint-disable react/prop-types */
import { ContentHeading } from "../../components";
import TestimonialCard from "../../components/TestimonialCard/TestimonialCard";
import "./testimonials.css";
// import leftarrow from "../../assets/leftarrow.svg";
// import rightarrow from "../../assets/rightarrow.svg";

const Testimonials = ({ filter }) => {
  const sectionCopy = {
    smallTitle: "Testimonials",
    title: "What our village is saying",
    text: "Sitters who step in when things come up.",
  };
  const sitterCopy = {
    smallTitle: "Testimonials",
    title: "What our sitters are saying",
    text: "Sitters make $17/hr and up on average",
  };

  const testimonialsData = [
    {
      name: "Lois E",
      text: "I’m very happy with everything and will be booking again soon. My pet adored her sitter from the first second! (And she was sound asleep when I got home.) It was perfect.",
      type: "Parent",
    },
    {
      name: "Becca O",
      text: "Sitter has been a great way for me to make money on the side while still being incredibly manageable with my busy schedule.",
      type: "Sitter",
    },
    {
      name: "Chelsea S",
      text: "It was great. Super smooth and easy. We will definitely use you all again!",
      type: "Parent",
    },
    {
      name: "Casey G",
      text: "Emily got on the floor with our dogs as soon as she walked in. She was immediately their new best friend.",
      type: "Parent",
    },
    {
      name: "Emily R",
      text: "Sitter makes petsitting easy, stress-free, and fun!",
      type: "Sitter",
    },
    {
      name: "Courtney M",
      text: "Both Stephanie and Cassie have been amazing with the girls!! We're so happy with Sitter, thank you for all of your great support.",
      type: "Parent",
    },
    {
      name: "Kelly E",
      text: "As a solo parent with no family around, it's been a relief to know I can count on Sitter for affordable and quality care in my community.",
      type: "Parent",
    },
    {
      name: "Cassie D",
      text: "All the families I've worked with so far have really appreciated Sitter and the service we are providing.",
      type: "Sitter",
    },
    {
      name: "Laura S",
      text: "Having Cassy care for our pets is something that we look forward to every week. She is everything we could hope for and more in someone who can trust our pets with.",
      type: "Parent",
    },
  ];
  return (
    <section className="main-section">
      <div className="testimonials-wrapper">
        <div className="testimonials-column-left">
          <ContentHeading
            classes={"testimonials-text-wrapper"}
            props={filter === "Sitter" ? sitterCopy : sectionCopy}
          />
          {/* <div className="testimonials-btn-wrapper">
            <button className="btn carousel-btn">
              <img src={leftarrow} />
            </button>
            <button className="btn carousel-btn">
              <img src={rightarrow} />{" "}
            </button>
          </div> */}
        </div>
        <div className="testimonials-column-right">
          <div className="testimonials-carousel-wrapper">
            {testimonialsData.map((item, i) => {
              if (filter === "") {
                return <TestimonialCard key={i} props={item} />;
              } else if (item.type === filter) {
                return <TestimonialCard key={i} props={item} />;
              }
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

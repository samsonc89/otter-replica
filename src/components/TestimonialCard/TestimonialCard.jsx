/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/prop-types */
import "./testimonialCard.css";

const TestimonialCard = ({ props }) => {
  return (
    <>
      <div className="testimonial-card">
        <p className="testimonial-text">"{props.text}"</p>
        <p className="testimonial-label">
          {props.name}, {props.type}
        </p>
      </div>
    </>
  );
};

export default TestimonialCard;

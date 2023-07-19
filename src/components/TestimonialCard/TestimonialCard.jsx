/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/prop-types */
import "./testimonialCard.css";

const TestimonialCard = ({ props }) => {
  return (
    <>
      <div className="testimonial-card">
        <p className="testimonial-text">"{props.text}"</p>
        <div className="testimonial-label-wrapper">
          <p className="testimonial-name">{props.name},</p>
          <p className="testimonial-type">{props.type}</p>
        </div>
      </div>
    </>
  );
};

export default TestimonialCard;
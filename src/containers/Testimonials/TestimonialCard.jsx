const TestimonialCard = ({ props }) => {
  return (
    <>
      <div className="testimonial-card">
        <p className="testimonial-text">{props.text}</p>
        <p className="testimonial-name">{props.name},</p>
        <p className="testimonial-type">{props.type}</p>
      </div>
    </>
  );
};

export default TestimonialCard;

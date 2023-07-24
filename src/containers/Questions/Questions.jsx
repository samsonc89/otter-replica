/* eslint-disable react/prop-types */
import "./questions.css";

const QuestionCard = ({ props }) => {
  return (
    <div className="question-card">
      <div className="question-card-content">
        <h2 className="question-title">{props.question}</h2>
        <p className="question-text">{props.text}</p>
      </div>
      <div className="expand-btn-wrapper">
        <div className="expand-card-btn">
          <span></span>
          <span className="rotating-line"></span>
        </div>
      </div>
    </div>
  );
};

const Questions = () => {
  const questions = [
    {
      question: "What is Sitter?",
      text: `Sitter is the petcare solution we wished existed, so we created it! We match families who need care with trusted sitters in their community, on-demand. If you've ever thought about sending the "bat signal" when you're in a petcare bind, us too. That's why our care options are designed to cater to both future plans and unplanned schedule changes. Sitters benefit from the flexibility to earn money on their schedules while providing quality care.`,
    },
    {
      question: "How is Sitter different from other petcare options?",
      text: "There are a few mainstays parents typically turn to when trying to grow their network of sitters; from asking friends who they use and recommend to turning to platforms where you have to do the legwork of searching, negotiating, and scheduling yourself.  All those options add to your mental load. Sitter aims to reduce your load. From pre-vetting sitters, matching your availability, offering clear transparent pricing, and showing up when your plan A falls through, think of Sitter as your easy button for petcare. Just tell us when you need care and we take care of the rest.",
    },
    {
      question: "Does Sitter offer last-minute backup care?",
      text: "Sure do! We can often confirm sitters in as little as 2 hours notice. The sooner you let us know though, the better; 24-48 hours advance notice is ideal.",
    },
    {
      question: "How are Sitter's sitters vetted?",
      text: "Our community is made up of highly vetted sitters who have been selected based on their ability to create a safe environment for your pet. We can confidently say that we’d leave our own pet with Sitter sitters in a heartbeat – and we do! /n /n In order to be active on Sitter, every sitter goes through a multi-point vetting process including a skills assessment, background-check, and reference check from previous families.  Sitter also offers free CPR and First Aid training opportunities for sitters.",
    },
    {
      question: "Where is Sitter available?",
      text: "Sitter is currently available in the South Bay, California area (Palo Alto, Menlo Park, and the surrounding areas) and Chicago, IL (city limits). We hope to expand to new cities soon. If we're not currently in one of our service areas, you can sign up for our waitlist to be notified when we launch in your city.",
    },
  ];
  return (
    <section className="main-section questions-section">
      <div className="questions-header">
        <h2 className="content-heading">Common questions</h2>
        <button className="faqs-btn btn-signup">View all FAQs</button>
      </div>
      <div className="questions-content-wrapper">
        {questions.map((item, i) => {
          return <QuestionCard key={i} props={item} />;
        })}
      </div>
    </section>
  );
};

export default Questions;

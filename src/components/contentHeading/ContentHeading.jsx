/* eslint-disable react/prop-types */
// eslint-disable-next-line react/prop-types
import "./contentHeading.css";
const ContentHeading = ({ props, classes }) => {
  return (
    <>
      <div className={`${classes} content-heading-wrapper `}>
        <p className="small-heading">{props.smallTitle}</p>
        <h2 className="content-heading">{props.title}</h2>
        <p className="main-text">{props.text}</p>
      </div>
    </>
  );
};

export default ContentHeading;

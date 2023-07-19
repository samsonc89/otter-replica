// eslint-disable-next-line react/prop-types
const ContentHeading = ({ props, classes }) => {
  return (
    <>
      <div className={classes}>
        <p className="small-heading">{props.smallTitle}</p>
        <h2 className="content-heading">{props.title}</h2>
        <p className="main-text">{props.text}</p>
      </div>
    </>
  );
};

export default ContentHeading;

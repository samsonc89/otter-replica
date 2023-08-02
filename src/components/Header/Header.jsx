import "./header.css";

const Header = ({ props }) => {
  return (
    <header className="main-section header-section">
      <div className="header-text-wrapper">
        <h1>{props.heading}</h1>
        <p className="heading-text">{props.text}</p>
        <button className="btn-signup-inverse">{props.btnText}</button>
      </div>
      <div className="header-img-wrapper"></div>
    </header>
  );
};

export default Header;

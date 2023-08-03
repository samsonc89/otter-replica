/* eslint-disable react/prop-types */
import "./header.css";

const Header = ({ props }) => {
  return (
    <header className="main-section header-section">
      <div className="header-col-left">
        <h1>{props.heading}</h1>
        <p className="heading-text">{props.text}</p>
        <button className="btn-signup-inverse">{props.btnText}</button>
      </div>
      <div className="header-col-right">
        <div className="header-image-wrapper">
          <img src={props.img} alt="header-image" />
        </div>
        <div className="header-shape"></div>
      </div>
    </header>
  );
};

export default Header;

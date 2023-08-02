import "./header.css";

const Header = ({ props }) => {
  return (
    <header className="main-section header-section">
      <h1>{props.heading}</h1>
      <p className="heading-text">{props.text}</p>
    </header>
  );
};

export default Header;

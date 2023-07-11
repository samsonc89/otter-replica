import "./header.css";

const Header = () => {
  return (
    <header className="header-wrapper container">
      <div className="hero-container"></div>
      <div className="hero-text">
        <h1 className="light-text">Reliable petcare on demand</h1>
        <p className="light-text main-text hero-p">
          Sitter matches pet-parents who need care with trusted sitters in their
          community, on-demand.
        </p>
      </div>
    </header>
  );
};

export default Header;

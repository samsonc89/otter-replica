import "./navbar.css";
import NavLinks from "./NavLinks";

const Navbar = () => {
  return (
    <nav className="nav-wrapper container">
      <div className="nav-logo-wrapper"></div>
      <div className="nav-items">
        <NavLinks />
      </div>
    </nav>
  );
};

export default Navbar;

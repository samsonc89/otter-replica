import "./navbar.css";
import logo from "../../assets/logo.png";
import NavLinks from "./NavLinks";
import UserAccess from "./UserAccess";

const Navbar = () => {
  return (
    <nav className="nav-wrapper container">
      <div className="nav-logo-wrapper">
        <a href="#home">
          <img src={logo} alt="" />
        </a>
      </div>
      <div className="nav-items">
        <NavLinks />
        <UserAccess />
      </div>
      <div className="toggle-btn">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </nav>
  );
};

export default Navbar;

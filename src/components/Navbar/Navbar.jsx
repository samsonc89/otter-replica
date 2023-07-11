import "./navbar.css";
import logo from "../../assets/logo.png";
import NavLinks from "./NavLinks";
import UserAccess from "./UserAccess";

const Navbar = () => {
  return (
    <nav className="nav-wrapper container">
      <div className="nav-logo-wrapper">
        <img src={logo} alt="" />
      </div>
      <div className="nav-items">
        <NavLinks />
        <UserAccess />
      </div>
    </nav>
  );
};

export default Navbar;

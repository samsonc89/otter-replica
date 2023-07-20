import "./navbar.css";
import logo from "../../assets/logo.png";
import NavLinks from "./NavLinks";
import UserAccess from "./UserAccess";
import { useState } from "react";

const Navbar = () => {
  const [isShowing, setIsShowing] = useState(false);

  let showingClass = isShowing ? "showing" : "";

  return (
    <nav className="nav-wrapper container">
      <div className="nav-logo-wrapper">
        <a href="#home">
          <img src={logo} alt="" />
        </a>
      </div>
      <div className={`nav-items ${showingClass}`}>
        <NavLinks />
        <UserAccess />
      </div>
      <div className="toggle-nav-btn" onClick={() => setIsShowing(!isShowing)}>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </nav>
  );
};

export default Navbar;

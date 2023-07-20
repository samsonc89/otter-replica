import "./navbar.css";
import logo from "../../assets/logo.png";
import NavLinks from "./NavLinks";
import UserAccess from "./UserAccess";
import { useRef, useState } from "react";

const Navbar = () => {
  const [isShowing, setIsShowing] = useState(false);
  let collapsedNavRef = useRef();

  const handleTransitionEnd = () => {
    collapsedNavRef.current.classList.remove("closing");
  };

  let showingClass = isShowing ? "showing" : "closing";

  return (
    <nav className="nav-wrapper container">
      <div className="nav-logo-wrapper">
        <a href="#home">
          <img src={logo} alt="" />
        </a>
      </div>
      <div ref={collapsedNavRef} className={`nav-overlay ${showingClass}`}>
        <div
          onTransitionEnd={handleTransitionEnd}
          className={`nav-items ${showingClass}`}
        >
          <NavLinks />
          <UserAccess />
        </div>
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

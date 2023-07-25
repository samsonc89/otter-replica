import "./navbar.css";
import logo from "../../assets/logo.png";
import NavLinks from "./NavLinks";
import UserAccess from "./UserAccess";
import { useRef, useState } from "react";

const Navbar = () => {
  const [isShowing, setIsShowing] = useState(false);
  let collapsedNavRef = useRef();
  let navItemsRef = useRef();

  let showingClass = isShowing ? "showing" : "";

  let showingOverlay = isShowing ? "showing-overlay" : "closing";

  const handleTransition = () => {
    collapsedNavRef.current.classList.remove("closing");
  };

  return (
    <nav className="nav-wrapper container">
      <div className="nav-logo-wrapper">
        <a href="#home">
          <img src={logo} alt="" />
        </a>
      </div>
      <div
        onTransitionEnd={() => handleTransition()}
        ref={collapsedNavRef}
        onClick={() => setIsShowing(!isShowing)}
        className={`nav-overlay ${showingOverlay}`}
      >
        <div ref={navItemsRef} className={`nav-items ${showingClass}`}>
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

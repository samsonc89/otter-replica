import { NavLink } from "react-router-dom";

const NavLinks = () => {
  return (
    <ul className="nav-links">
      <li>
        <NavLink
          to="/otter-replica/parents"
          className={({ isActive }) => (isActive ? "active-nav-link" : "")}
        >
          Parents
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/otter-replica/sitters"
          className={({ isActive }) => (isActive ? "active-nav-link" : "")}
        >
          Sitters
        </NavLink>
      </li>
      <li>
        <a href="#trust">Trust & Safety</a>
      </li>
      <li>
        <a href="#blog">Blog</a>
      </li>
    </ul>
  );
};

export default NavLinks;

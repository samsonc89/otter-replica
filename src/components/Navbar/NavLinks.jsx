import { Link } from "react-router-dom";

const NavLinks = () => {
  return (
    <ul className="nav-links">
      <li>
        <Link to="/otter-replica/parents">Parents</Link>
      </li>
      <li>
        <a href="#sitters">Sitters</a>
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

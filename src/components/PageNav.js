import { Link, NavLink } from "react-router-dom";
import logo from "../assets/shared/desktop/logo.svg";

function PageNav() {
  return (
    <nav className="nav">
      <Link to="/">
        <img src={logo} alt="proba" />
      </Link>

      <ul className="nav-list">
        <li>
          <NavLink to="/stories">Stories</NavLink>
        </li>
        <li>
          <NavLink to="/features">Features</NavLink>
        </li>
        <li>
          <NavLink to="/pricing">Pricing</NavLink>
        </li>
      </ul>

      <button>Get an invite</button>
    </nav>
  );
}

export default PageNav;

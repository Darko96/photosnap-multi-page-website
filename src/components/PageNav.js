import { Link, NavLink } from "react-router-dom";
import logo from "../assets/shared/desktop/logo.svg";
import { useEffect, useState } from "react";

function PageNav() {
  const [isActive, setIsActive] = useState(false);

  return (
    <nav className="nav">
      <div className="logo-box">
        <Link to="/">
          <img src={logo} alt="proba" />
        </Link>
        <button
          className="visible menu-btn"
          onClick={() => setIsActive((prevState) => !prevState)}
        >
          {isActive && (
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="15">
              <path
                fillRule="evenodd"
                d="M14.718.075l.707.707L8.707 7.5l6.718 6.718-.707.707L8 8.207l-6.718 6.718-.707-.707L7.293 7.5.575.782l.707-.707L8 6.793 14.718.075z"
              />
            </svg>
          )}

          {!isActive && (
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="6">
              <g fillRule="evenodd">
                <path d="M0 0h20v1H0zM0 5h20v1H0z" />
              </g>
            </svg>
          )}
        </button>
      </div>

      <ul className={`nav-list ${isActive ? "visible" : "hidden"}`}>
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

      <button className={`nav-btn ${isActive ? "visible" : "hidden"}`}>
        Get an invite
      </button>
    </nav>
  );
}

export default PageNav;

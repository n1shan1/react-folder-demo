import { Link, useLocation } from "react-router-dom";
import "./styles.css";

export default function Navigation() {
  const location = useLocation();

  return (
    <nav className="nav">
      <div className="nav-container">
        <Link to="/" className="nav-logo">
          React App
        </Link>
        <ul className="nav-links">
          <li>
            <Link
              to="/"
              className={
                location.pathname === "/" ? "nav-link active" : "nav-link"
              }
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/profile"
              className={
                location.pathname === "/profile"
                  ? "nav-link active"
                  : "nav-link"
              }
            >
              Profile
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

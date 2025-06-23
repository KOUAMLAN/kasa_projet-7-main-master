import { Link, NavLink } from "react-router-dom";
import "../styles/header.scss";

function Header() {
  return (
    <header className="header">
      {/* Le logo redirige toujours vers la page d'accueil */}
      <Link to="/">
        <img
          src="/images/_Header.png"
          alt="Kasa"
          className="header-logo"
        />
      </Link>
      <nav>
        <NavLink
          to="/"
          className={({ isActive }) => "nav-link" + (isActive ? " active" : "")}
          end
        >
          Accueil
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) => "nav-link" + (isActive ? " active" : "")}
        >
          A Propos
        </NavLink>
      </nav>
    </header>
  );
}

export default Header;
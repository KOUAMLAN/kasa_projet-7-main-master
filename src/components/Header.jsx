import React from "react";
import { Link, NavLink } from "react-router-dom";
import "../styles/header.scss";

function Header() {
  return (
    <header className="header">
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
          À propos
        </NavLink>
      </nav>
    </header>
  );
}

export default Header;
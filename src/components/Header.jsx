import styles from "../sass/header.module.scss";
import logo from "../assets/imgs/logo.png";
import { NavLink } from "react-router-dom";

const renderLogo = () => {
    return (
        <div className={styles.logo}>
            <NavLink to="/">
                <img src={logo} alt="Logo" />
            </NavLink>
        </div>
    );
};

const renderNav = () => {
    return (
        <nav className={styles.nav}>
            <ul>
                <li>
                    <NavLink
                        to="/"
                        className={({ isActive }) =>
                            isActive ? styles.activeLink : undefined
                        }
                    >
                        Accueil
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/a-propos"
                        className={({ isActive }) =>
                            isActive ? styles.activeLink : undefined
                        }
                    >
                        A&nbsp;propos
                    </NavLink>
                </li>
            </ul>
        </nav>
    );
};

const Header = () => {
    return (
        <header className={styles.header}>
            {renderLogo()}
            {renderNav()}
        </header>
    );
};

export default Header;
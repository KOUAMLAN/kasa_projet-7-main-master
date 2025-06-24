import styles from "../sass/header.module.scss";
import logo from "../assets/imgs/logo.png";
import { NavLink } from "react-router-dom";

const Header = () => {
    return (
        <header className={styles.header}>
            <div className={styles.logo}>
                <NavLink to="/" aria-label="Accueil">
                    <img src={logo} alt="Logo Kasa" />
                </NavLink>
            </div>
            <nav className={styles.nav}>
                <ul>
                    <li>
                        <NavLink
                            to="/"
                            className={({ isActive }) =>
                                `${styles.link} ${isActive ? styles.activeLink : ""}`
                            }
                        >
                            Accueil
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/a-propos"
                            className={({ isActive }) =>
                                `${styles.link} ${isActive ? styles.activeLink : ""}`
                            }
                        >
                            A&nbsp;Propos
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
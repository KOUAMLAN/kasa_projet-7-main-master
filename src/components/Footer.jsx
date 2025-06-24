import logo from "../assets/imgs/logo-white.png";
import styles from "../sass/footer.module.scss";
import { NavLink } from "react-router-dom";

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <NavLink to="/">
                <img src={logo} alt="logo" />
            </NavLink>

            <p>© 2020 Kasa. All rights reserved</p>
        </footer>
    );
};

export default Footer;

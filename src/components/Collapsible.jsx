/* eslint-disable react/prop-types */

import { useState } from "react";
import styles from "../sass/collapsible.module.scss";

const Collapsible = (props) => {
    const [isOpen, setIsOpen] = useState(false);

    const togglePanel = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className={styles.panel}>
            <div className={styles.panelHeader} onClick={togglePanel}>
                <h2>{props.title}</h2>
                <span className={styles.icon}>{isOpen ? "▲" : "▼"}</span>
            </div>
            {isOpen && (
                <div className={styles.panelContent}>{props.children}</div>
            )}
        </div>
    );
};

export default Collapsible;

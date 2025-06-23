import React from "react";
import { Link } from "react-router-dom";
import styles from "./Card.module.scss";

function Card({ accommodation }) {
  return (
    <Link to={`/accommodation/${accommodation.id}`} className={styles.card}>
      <div className={styles.cardImgContainer}>
        <img
          src={accommodation.cover}
          alt={accommodation.title}
          className={styles.cardImg}
        />
        <div className={styles.cardOverlay}></div>
        <div className={styles.cardTitleOverlay}>
          {accommodation.title}
        </div>
      </div>
    </Link>
  );
}

export default Card;
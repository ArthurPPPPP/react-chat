import React from "react";
import styles from "./styles.module.scss";
import logo from "../../assets/img/success-green-check-mark.png";
export const Avatar = ({ avatarURL, isOnline }) => {
  return (
    <div className={styles.avatarContainer}>
      <img
        src={logo}
        alt="Online"
        className={isOnline ? styles.online : styles.offline}
      />
      <div className={styles.avatar}>
        <img src={avatarURL} alt="Avatar" className={styles.avatarIMG} />
      </div>
    </div>
  );
};

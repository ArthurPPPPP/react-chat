import React from "react";
import logo from "../../../assets/img/send.png";
import styles from "./styles.module.scss";
export const SendButton = () => {
  return (
    <button className={styles.sendButton}>
      <img src={logo} alt="Logo" />
    </button>
  );
};

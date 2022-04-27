import React from "react";
import styles from "./styles.module.scss";
export const Notification = ({ active,onClickHandle }) => {
  return (
    <div
      className={active ? styles.notificationActive : styles.notificationClose}
      onClick={onClickHandle}
    >
      <div className={styles.content}>
        <h2>You have new message!</h2>
      </div>
    </div>
  );
};

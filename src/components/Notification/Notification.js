import React from "react";
import styles from "./styles.module.scss";
export const Notification = ({ active }) => {
  return (
    <div
      className={active ? styles.notification : styles.notificationActive}
    ></div>
  );
};

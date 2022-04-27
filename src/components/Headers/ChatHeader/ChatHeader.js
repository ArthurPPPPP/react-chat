import React from "react";
import { Avatar } from "../../Avatar/Avatar";
import styles from "./styles.module.scss";

export const ChatHeader = ({ data }) => {
  return (
    <header className={styles.header}>
      <div className={styles.avatar}>
        <Avatar avatarURL={data.avatarURL} isOnline={data.online} />
      </div>

      <h2>{data.userName}</h2>
    </header>
  );
};

import React from "react";
import { Avatar } from "../../Avatar/Avatar";
import styles from "./styles.module.scss";

export const ChatItem = ({ data, onClickHandle }) => {
  return (
    <li
      className={styles.chatItem}
      onClick={() => onClickHandle(data.id, data.userName)}
    >
      <Avatar avatarURL={data.avatarURL} isOnline={data.online} />
      <div className={styles.infoContainer}>
        <div className={styles.chatInfo}>
          <p className={styles.userName}>{data.userName}</p>
          <p className={styles.messageText}>
            {data.messages[data.messages.length - 1].messageText}
          </p>
        </div>
        <div className={styles.date}>
          <span>{data.messages[data.messages.length - 1].messageDate}</span>
        </div>
      </div>
    </li>
  );
};

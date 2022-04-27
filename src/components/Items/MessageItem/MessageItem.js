import React from "react";
import styles from "./styles.module.scss";
import { Avatar } from "../../Avatar/Avatar";
export const MessageItem = ({ data, avatar }) => {
  return (
    <li className={data.own ? styles.myMessage : styles.message}>
      <div className={styles.wrapper}>
        <div className={styles.avatar}>
          <Avatar avatarURL={avatar} />
        </div>
        <div className={styles.container}>
          <p>{data.messageText}</p>
        </div>
      </div>

      <span>{data.messageDate}</span>
    </li>
  );
};

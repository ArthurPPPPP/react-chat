import React from "react";
import { MessageItem } from "../Items/MessageItem/MessageItem";
import styles from "./styles.module.scss";

export const Chat = ({ chatData, avatar }) => {
  return (
    <ul className={styles.chat}>
      {chatData.map((n) => (
        <MessageItem data={n} avatar={avatar} key={n.id} />
      ))}
    </ul>
  );
};
